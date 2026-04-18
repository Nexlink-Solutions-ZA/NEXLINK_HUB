import { useEffect, type RefObject } from "react";

export function useSteamyPhysics(
  footerRef: RefObject<HTMLElement | null>,
  maskGroupRef: RefObject<SVGGElement | null>
) {
  useEffect(() => {
    const footer = footerRef.current;
    const maskGroup = maskGroupRef.current;
    if (!footer || !maskGroup) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Add a circle (wipe marks) to the mask group
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", "40");
      circle.setAttribute("fill", "black"); // Wipes out the mask (makes it transparent)
      circle.style.transition = "opacity 2s ease-out, transform 2s ease-out";
      circle.style.opacity = "1";
      circle.style.transform = "scale(1)";

      maskGroup.appendChild(circle);

      // Clean up the circle after it fades
      setTimeout(() => {
        circle.style.opacity = "0";
        circle.style.transform = "scale(1.5)";
        setTimeout(() => {
          if (maskGroup.contains(circle)) {
            maskGroup.removeChild(circle);
          }
        }, 2000);
      }, 500);
    };

    footer.addEventListener("mousemove", handleMouseMove);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [footerRef, maskGroupRef]);
}
