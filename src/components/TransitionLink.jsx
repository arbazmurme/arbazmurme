"use client";
import PropTypes from "prop-types";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/context/animatePageIn";

const TransitionLink = ({ href, label, children, className, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {children || label}
    </button>
  );
};

TransitionLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default TransitionLink;
