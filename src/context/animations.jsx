import React from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};
export default animatePageIn;

// export const animatePageOut = (href) => {
//   const router = useRouter();

//   const bannerOne = document.getElementById("banner-1");
//   const bannerTwo = document.getElementById("banner-2");
//   const bannerThree = document.getElementById("banner-3");
//   const bannerFour = document.getElementById("banner-4");

//   if (bannerOne && bannerTwo && bannerThree && bannerFour) {
//     const tl = gsap.timeline();

//     tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
//       yPercent: -100,
//     }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
//       yPercent: 0,
//       stagger: 0.2,
//       onComplete: () => {
//         router.push(href);
//       },
//     });
//   }
// };
