
// src/components/CartIcon.tsx
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, X, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CartIcon: React.FC = () => {
  const { totalItems, isOpen, setIsOpen } = useCart();
  const { showToast } = useToast();

  // Wrap showToast to match CartContent expected type
 const handleToast = (options: { title: string; description?: string }) => {
  showToast(
    <div className="flex flex-col">
      <strong>{options.title}</strong>
      {options.description && <span className="text-sm">{options.description}</span>}
    </div>,
    { duration: 4000 }
  );
};



  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <CartContent showToast={handleToast} />
    </Sheet>
  );
};

// Props for CartContent
interface CartContentProps {
  showToast: (options: { title: string; description?: string }) => void;
}

const CartContent: React.FC<CartContentProps> = ({ showToast }) => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = async () => {
    if (items.length === 0) return;

    try {
      // Show initial checkout toast
      showToast({ title: "Checkout", description: "Redirecting to secure payment..." });

      // Simulate payment process
      setTimeout(() => {
        clearCart();
        showToast({ title: "Success!", description: "Your order has been placed successfully." });
      }, 2000);
    } catch (error) {
      showToast({ title: "Error", description: "Failed to process checkout. Please try again." });
    }
  };

  return (
    <SheetContent className="w-full sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col h-full">
        <div className="flex-1 py-6">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center mt-2">
                      <span className="font-semibold">£{item.price}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          £{item.originalPrice}
                        </span>
                      )}
                      <Badge variant="outline" className="ml-2">
                        {item.type === "subscription" ? "Monthly" : "One-time"}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-6 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>£{totalPrice}</span>
            </div>

            <div className="space-y-2">
              <Button onClick={handleCheckout} className="w-full" size="lg">
                <CreditCard className="h-4 w-4 mr-2" />
                Secure Checkout
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full">
                Clear Cart
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Secure payment powered by Stripe
            </p>
          </div>
        )}
      </div>
    </SheetContent>
  );
};
