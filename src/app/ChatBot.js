"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const initialMessage = {
  role: "assistant",
  content:
    "Hi! I'm Arbaz's portfolio assistant. Ask me about projects, skills, experience, or contact details.",
};

export default function ChatBot({ variant = "floating" }) {
  const pathname = usePathname();
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(variant === "page");

  const isFloating = variant === "floating";
  const launcherRef = useRef(null);
  const panelRef = useRef(null);
  const messagesRef = useRef(null);
  const robotRef = useRef(null);
  const orbitRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const mouthRef = useRef(null);
  const handRef = useRef(null);
  const clickMeRef = useRef(null);
  const messageCountRef = useRef(messages.length);

  useEffect(() => {
    if (!isFloating || !launcherRef.current || !robotRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        launcherRef.current,
        { y: 0, rotate: -4 },
        {
          y: -14,
          rotate: 4,
          duration: 0.9,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.fromTo(
        robotRef.current,
        { y: 0 },
        {
          y: -7,
          duration: 0.9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotate: 360,
          duration: 12,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }

      if (leftEyeRef.current && rightEyeRef.current) {
        gsap.set([leftEyeRef.current, rightEyeRef.current], {
          transformOrigin: "50% 50%",
        });
        gsap.to([leftEyeRef.current, rightEyeRef.current], {
          scaleY: 0.12,
          duration: 0.08,
          ease: "power1.inOut",
          repeat: -1,
          repeatDelay: 2.5,
          yoyo: true,
        });
      }

      if (mouthRef.current) {
        gsap.fromTo(
          mouthRef.current,
          { scaleX: 0.8, scaleY: 0.95 },
          {
            scaleX: 1.15,
            scaleY: 1.35,
            duration: 0.42,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      if (handRef.current) {
        gsap.set(handRef.current, { transformOrigin: "15% 15%" });
        gsap.fromTo(
          handRef.current,
          { rotate: -12, y: 0 },
          {
            rotate: 26,
            y: -3,
            duration: 0.35,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      if (clickMeRef.current) {
        gsap.fromTo(
          clickMeRef.current,
          { y: 0, scale: 1 },
          {
            y: -8,
            scale: 1.05,
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }
    });

    return () => ctx.revert();
  }, [isFloating]);

  useEffect(() => {
    if (!panelRef.current) {
      return;
    }

    gsap.killTweensOf(panelRef.current);

    if (isOpen) {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 24, scale: 0.92 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }

    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (messages.length <= messageCountRef.current) {
      return;
    }

    const nodes = messagesRef.current?.querySelectorAll("[data-message-item]");
    const latestNode = nodes?.[nodes.length - 1];

    if (latestNode) {
      gsap.fromTo(
        latestNode,
        { autoAlpha: 0, y: 18, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }

    messageCountRef.current = messages.length;
  }, [messages]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || loading) {
      return;
    }

    const nextMessages = [...messages, { role: "user", content: trimmedInput }];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : {
            error:
              "The chatbot server returned an unexpected response. Please check that /api/chat exists and the server is running properly.",
          };

      if (!response.ok) {
        throw new Error(data?.error || "Unable to get a reply right now.");
      }

      const reply =
        data?.reply || "I'm here, but I couldn't generate a reply just now.";

      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            error.message ||
            "Something went wrong while contacting the assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const toggleOpen = () => {
    if (!isFloating) {
      return;
    }

    setIsOpen((current) => !current);
  };

  const renderRobotFace = () => (
    <div
      ref={robotRef}
      className="relative flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[1.9rem] border border-white/20 bg-gradient-to-br from-[#18243a] via-[#0f172a] to-[#050816] shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
    >
      <div className="absolute inset-2 rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
      <div className="relative flex h-10 w-12 flex-col items-center justify-center gap-1 rounded-full border border-cyan-300/30 bg-[#050816]">
        <div className="flex items-center justify-center gap-2">
          <span
            ref={leftEyeRef}
            className="block h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]"
          />
          <span
            ref={rightEyeRef}
            className="block h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]"
          />
        </div>
        <span
          ref={mouthRef}
          className="block h-1.5 w-4 rounded-full bg-cyan-200/90 shadow-[0_0_12px_rgba(186,230,253,0.75)]"
        />
      </div>
      <div className="absolute -top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
      <div className="absolute -top-1 h-4 w-[2px] bg-cyan-300/60" />
      <div
        ref={handRef}
        className="absolute -right-3 top-7 flex h-7 w-4 items-start justify-center"
      >
        <span className="block h-6 w-3 rounded-full border border-cyan-300/40 bg-gradient-to-b from-cyan-300 to-sky-500 shadow-[0_0_18px_rgba(103,232,249,0.55)]" />
      </div>
    </div>
  );

  const chatPanel = (
    <div
      ref={panelRef}
      className={`${
        isFloating
          ? "absolute left-0 top-24 w-[min(24rem,calc(100vw-2rem))]"
          : "relative mx-auto mt-10 w-full max-w-3xl"
      } rounded-[2rem] border border-white/15 bg-white/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:bg-[#081120]/95`}
      style={isFloating && !isOpen ? { opacity: 0, visibility: "hidden" } : undefined}
    >
      <div className="mb-4 flex items-center gap-3 rounded-[1.5rem] bg-slate-100/90 p-3 dark:bg-white/5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
          <div className="relative scale-75">{renderRobotFace()}</div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Portfolio Robot
          </p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-300">
            Animated assistant for Arbaz Murme
          </p>
        </div>
      </div>

      <div
        ref={messagesRef}
        className={`mb-3 ${
          isFloating ? "h-80" : "h-[28rem]"
        } space-y-3 overflow-y-auto rounded-[1.5rem] bg-slate-50 p-4 dark:bg-[#020617]`}
      >
        {messages.map((msg, index) => (
          <div
            key={`${msg.role}-${index}`}
            data-message-item
            className={`max-w-[86%] rounded-[1.3rem] px-4 py-3 text-sm leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-slate-900 text-white dark:bg-blue-500"
                : "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="w-fit rounded-[1.3rem] bg-white px-4 py-3 text-sm text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:120ms]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:240ms]" />
              <span className="ml-1">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <textarea
          className="min-h-[54px] flex-1 resize-none rounded-[1.4rem] border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          rows={1}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about projects, skills, experience..."
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="rounded-[1.4rem] bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
        >
          Send
        </button>
      </div>
    </div>
  );

  if (!isFloating) {
    return chatPanel;
  }

  if (pathname === "/chat") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-4 top-5 z-[120] sm:left-6 sm:top-6">
      <div className="pointer-events-auto relative">
        {chatPanel}

        <button
          ref={launcherRef}
          type="button"
          onClick={toggleOpen}
          className="group relative flex items-start gap-2"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        >
          <div
            ref={clickMeRef}
            className="max-w-[10rem] rounded-2xl border border-cyan-300/20 bg-slate-950 px-3 py-2 text-left text-xs font-medium text-white shadow-[0_18px_50px_rgba(2,6,23,0.35)] sm:max-w-[11rem] sm:px-4 sm:py-3 sm:text-sm"
          >
            Click me for help
            <div className="mt-1 text-[11px] font-normal text-cyan-200/80 sm:text-xs">
              Ask about projects
            </div>
          </div>

          <div className="relative">
            <div
              ref={orbitRef}
              className="absolute -inset-3 rounded-full border border-cyan-400/25"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />
            </div>
            <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            {renderRobotFace()}
          </div>
        </button>
      </div>
    </div>
  );
}
