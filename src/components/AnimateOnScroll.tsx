import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
}

export const AnimateOnScroll = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Descomentar si quieres que la animación ocurra cada vez que haces scroll
          // } else {
          //   setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // Porcentaje del elemento que debe ser visible para activar (0.15 = 15%)
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12";
      case "fade-down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-12";
      case "fade-left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12";
      case "fade-right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-12";
      case "zoom-in":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "fade-in":
      default:
        return isVisible ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-transform",
        getAnimationClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
