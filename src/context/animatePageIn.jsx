import gsap from "gsap";

export const animatePageIn = () => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4")
  ];

  if (banners.every(banner => banner)) {
    const tl = gsap.timeline();
    tl.set(banners, { yPercent: 0 })
      .to(banners, { yPercent: 100, stagger: 0.2 });
  }
};

export const animatePageOut = (href, router) => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4")
  ];

  if (banners.every(banner => banner)) {
    const tl = gsap.timeline();
    tl.set(banners, { yPercent: -100 })
      .to(banners, {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          router.push(href);
        }
      });
  }
};
