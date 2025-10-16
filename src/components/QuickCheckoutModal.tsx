import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useCart, type CartItem } from "@/contexts/CartContext";
import { CreditCard, Lock } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface QuickCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: CartItem;
}

export const QuickCheckoutModal: React.FC<QuickCheckoutModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);
  const { addToCart, clearCart } = useCart();

  const handleQuickCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item || !email || !name) return;

    setProcessing(true);

    try {
      // Add to cart if not already there
      addToCart(item);

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and close modal
      clearCart();
      onClose();

      toast.success("Payment Successful!", {
        description: `Thank you for purchasing ${item.name}. You'll receive an email confirmation shortly.`,
      });

      // Reset form
      setEmail("");
      setName("");
    } catch (error) {
      toast.error("Payment Failed", {
        description:
          "There was an error processing your payment. Please try again.",
      });
    } finally {
      setProcessing(false);
    }
  };

  if (!item) return null;

  const handleCheckout = async () => {
    try {
      // 1. Send items to your backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/payment/`,
        { name: "cv-booster", price: 200, quantity: 1 } // must match backend
      );

      // 2. Get the Stripe Checkout URL
      const { url } = response.data;

      // 3. Redirect the user to Stripe Checkout
      window.location.href = url;
    } catch (error: any) {
      console.error("Payment failed:", error);
      alert(error.response?.data?.message || error.message);
    } finally {
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Checkout</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <div className="border rounded-lg p-4 bg-accent/20">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-2xl font-bold">£{item.price}</span>
              <Badge variant="outline">
                {item.type === "subscription" ? "Monthly" : "One-time"}
              </Badge>
            </div>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleQuickCheckout} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Lock className="h-4 w-4 mr-2" />
              <span>Secure payment powered by Stripe</span>
            </div>

            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={processing}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="flex-1"
                disabled={processing}
                onClick={handleCheckout}
              >
                {processing ? (
                  "Processing..."
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay £{item.price}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
