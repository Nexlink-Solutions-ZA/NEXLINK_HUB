import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { type ReactNode, type MouseEvent } from "react";
import { Link } from "react-router-dom";

interface ModernButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  to?: string;
  type?: "button" | "link" | "external";
  variant?: "primary" | "secondary";
  ariaLabel?: string;
}

export function ModernButton({
  children,
  onClick,
  className = "",
  href,
  to,
  type = "button",
  variant = "primary",
  ariaLabel,
}: ModernButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Magnetic logic
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    magneticX.set(distanceX * 0.3);
    magneticY.set(distanceY * 0.3);

    // Gradient logic
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    magneticX.set(0);
    magneticY.set(0);
  }

  const background = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(52, 25, 224, 0.15), transparent 80%)`;
  const darkBackground = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)`;

  const baseStyles = "relative group px-9 py-4 rounded-full text-lg font-medium transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]";
  
  const variantStyles = variant === "primary" 
    ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
    : "bg-transparent text-neutral-900 border border-black/20 dark:text-white dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5";

  const content = (
    <>
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: variant === "primary" ? darkBackground : background }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    className: `${baseStyles} ${variantStyles} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: magneticX, y: magneticY },
    "aria-label": ariaLabel
  };

  if (to) {
    return (
      <Link to={to} {...(motionProps as any)}>
        <motion.div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: variant === "primary" ? darkBackground : background }} />
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}
