import React, { forwardRef } from "react";
import type { ReactNode } from "react";

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
  horizontal?: boolean;
  style?: React.CSSProperties;
}

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, className = "", horizontal = false, style }, ref) => {
    return (
      <div
        ref={ref}
        className={`overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${horizontal ? "whitespace-nowrap" : ""} ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
