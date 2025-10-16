// src/components/BuyNowButton.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "@/contexts/CartContext";
import { QuickCheckoutModal } from "@/components/QuickCheckoutModal";
import { ShoppingCart, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // custom toast hook

interface BuyNowButtonProps {
  item: CartItem;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const BuyNowButton: React.FC<BuyNowButtonProps> = ({
  item,
  variant = "default",
  size = "default",
  showIcon = true,
  className,
  children,
}) => {
  const [showQuickCheckout, setShowQuickCheckout] = useState(false);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickCheckout(true);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleBuyNow}
        className={className}
      >
        {showIcon && <Zap className="h-4 w-4 mr-2" />}
        {children || "Buy Now"}
      </Button>

      <QuickCheckoutModal
        isOpen={showQuickCheckout}
        onClose={() => setShowQuickCheckout(false)}
        item={item}
      />
    </>
  );
};

export const AddToCartButton: React.FC<BuyNowButtonProps> = ({
  item,
  variant = "outline",
  size = "default",
  showIcon = true,
  className,
  children,
}) => {
  const { addToCart } = useCart();
  const { success } = useToast(); // get the toast function

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(item);

    // Show toast using custom useToast hook
    success(`${item.name} has been added to your cart!`);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      className={className}
    >
      {showIcon && <ShoppingCart className="h-4 w-4 mr-2" />}
      {children || "Add to Cart"}
    </Button>
  );
};
