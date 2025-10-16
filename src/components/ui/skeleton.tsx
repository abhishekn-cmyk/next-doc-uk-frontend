// components/ui/skeleton.tsx
import React from "react";
import cn from "clsx"; // optional for className merging

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  circle?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, width, height, circle }) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 dark:bg-gray-700",
        circle ? "rounded-full" : "rounded-md",
        className
      )}
      style={{ width, height }}
    />
  );
};
