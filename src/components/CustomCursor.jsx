"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "summary",
  "label[for]",
  "[data-cursor='interactive']",
  ".cursor-hover",
  ".magnetic",
].join(", ");

const TEXT_SELECTOR = [
  "p",
  "span",
  "li",
  "blockquote",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "[data-cursor='text']",
].join(", ");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function CustomCursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const hoverQuery = window.matchMedia("(hover: hover)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      !finePointerQuery.matches ||
      !hoverQuery.matches ||
      reducedMotionQuery.matches
    ) {
      return undefined;
    }

    const html = document.documentElement;
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trailNodes = trailRefs.current.filter(Boolean);

    if (!root || !dot || !ring) {
      return undefined;
    }

    html.classList.add("has-custom-cursor");

    // Keep transforms on the compositor for a smoother, low-jank cursor.
    gsap.set([dot, ring, ...trailNodes], {
      xPercent: -50,
      yPercent: -50,
      force3D: true,
    });

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };

    const dotPosition = { ...pointer };
    const ringPosition = { ...pointer };
    const trailPositions = trailNodes.map(() => ({ ...pointer }));

    let animationFrame = 0;
    let visible = false;
    let isPressed = false;
    let hoveredInteractive = null;
    let hoveredText = null;
    let dotScale = 1;
    let ringScale = 1;

    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");
    const trailSetters = trailNodes.map((node) => ({
      x: gsap.quickSetter(node, "x", "px"),
      y: gsap.quickSetter(node, "y", "px"),
    }));

    const updateVisibility = (nextVisible) => {
      if (visible === nextVisible) {
        return;
      }

      visible = nextVisible;
      gsap.to(root, {
        autoAlpha: nextVisible ? 1 : 0,
        duration: nextVisible ? 0.2 : 0.15,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const animateState = () => {
      const interactiveScale = hoveredInteractive ? 1.9 : 1;
      const textScale = !hoveredInteractive && hoveredText ? 1.35 : 1;
      const nextRingScale = interactiveScale * textScale;
      const nextDotScale = hoveredInteractive ? 0.75 : hoveredText ? 1.8 : 1;

      dotScale = isPressed ? nextDotScale * 0.8 : nextDotScale;
      ringScale = isPressed ? nextRingScale * 0.82 : nextRingScale;

      gsap.to(dot, {
        scale: dotScale,
        duration: 0.28,
        ease: "power3.out",
        overwrite: true,
      });

      gsap.to(ring, {
        scale: ringScale,
        opacity: hoveredText ? 0.9 : 1,
        duration: 0.36,
        ease: "power3.out",
        overwrite: true,
      });

      gsap.to(trailNodes, {
        scale: hoveredInteractive ? 0.95 : 1,
        opacity: hoveredInteractive ? 0.85 : 0.65,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const playClickPulse = () => {
      gsap.fromTo(
        ring,
        { scale: ringScale * 0.82 },
        {
          scale: ringScale * 1.12,
          duration: 0.22,
          ease: "power3.out",
          overwrite: true,
          onComplete: animateState,
        }
      );

      gsap.fromTo(
        dot,
        { scale: dotScale * 0.75 },
        {
          scale: dotScale,
          duration: 0.2,
          ease: "power2.out",
          overwrite: true,
        }
      );
    };

    const getMagneticOffset = () => {
      if (!hoveredInteractive) {
        return { x: 0, y: 0 };
      }

      // Pull the cursor slightly toward the hovered target's center.
      const rect = hoveredInteractive.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;
      const distanceX = pointer.x - centerX;
      const distanceY = pointer.y - centerY;
      const normalizedX = clamp(distanceX / Math.max(rect.width * 0.5, 1), -1, 1);
      const normalizedY = clamp(distanceY / Math.max(rect.height * 0.5, 1), -1, 1);

      return {
        x: normalizedX * Math.min(rect.width * 0.16, 20),
        y: normalizedY * Math.min(rect.height * 0.16, 20),
      };
    };

    const tick = () => {
      const magneticOffset = getMagneticOffset();
      const dotTargetX = pointer.x - magneticOffset.x * 0.45;
      const dotTargetY = pointer.y - magneticOffset.y * 0.45;
      const ringTargetX = pointer.x - magneticOffset.x;
      const ringTargetY = pointer.y - magneticOffset.y;

      dotPosition.x += (dotTargetX - dotPosition.x) * 0.34;
      dotPosition.y += (dotTargetY - dotPosition.y) * 0.34;
      ringPosition.x += (ringTargetX - ringPosition.x) * 0.16;
      ringPosition.y += (ringTargetY - ringPosition.y) * 0.16;

      setDotX(dotPosition.x);
      setDotY(dotPosition.y);
      setRingX(ringPosition.x);
      setRingY(ringPosition.y);

      trailPositions.forEach((trail, index) => {
        const leader = index === 0 ? ringPosition : trailPositions[index - 1];
        const easing = 0.15 - index * 0.02;

        trail.x += (leader.x - trail.x) * easing;
        trail.y += (leader.y - trail.y) * easing;

        trailSetters[index]?.x(trail.x);
        trailSetters[index]?.y(trail.y);
      });

      animationFrame = window.requestAnimationFrame(tick);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      updateVisibility(true);
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      hoveredInteractive = target.closest(INTERACTIVE_SELECTOR);
      hoveredText = hoveredInteractive ? null : target.closest(TEXT_SELECTOR);
      animateState();
    };

    const handlePointerLeaveWindow = () => {
      hoveredInteractive = null;
      hoveredText = null;
      animateState();
      updateVisibility(false);
    };

    const handlePointerDown = () => {
      isPressed = true;
      animateState();
      playClickPulse();
    };

    const handlePointerUp = () => {
      isPressed = false;
      animateState();
    };

    const handleResize = () => {
      hoveredInteractive = null;
      hoveredText = null;
      animateState();
    };

    const handleMouseOut = (event) => {
      if (!event.relatedTarget) {
        handlePointerLeaveWindow();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("blur", handlePointerLeaveWindow);
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    animateState();
    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("blur", handlePointerLeaveWindow);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseout", handleMouseOut);
      html.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          className="custom-cursor__trail"
        />
      ))}
    </div>
  );
}
