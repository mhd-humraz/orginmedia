import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { openWhatsAppOrder, OrderDetails } from "@/lib/whatsapp";

interface OrderFormProps {
  productName: string;
  productImage?: string;
  size: string;
  price: number;
  isCustom?: boolean;
  customFileUrl?: string;
}

const OrderForm = ({
  productName,
  productImage,
  size,
  price,
  isCustom = false,
  customFileUrl,
}: OrderFormProps) => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName.trim() || !address.trim()) {
      return;
    }

    const order: OrderDetails = {
      productName,
      productImage,
      size,
      price,
      customerName: customerName.trim(),
      address: address.trim(),
      notes: notes.trim() || undefined,
      isCustom,
      customFileUrl,
    };

    openWhatsAppOrder(order);
  };

  const isValid = customerName.trim() && address.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name *</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Delivery Address *</Label>
        <Textarea
          id="address"
          placeholder="Enter complete delivery address with pincode"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          placeholder="Any special instructions..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
        />
      </div>

      {/* Order Summary */}
      <div className="bg-secondary rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Poster</span>
          <span className="font-medium">{productName}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Size</span>
          <span className="font-medium">{size}</span>
        </div>
        <div className="border-t border-border my-2" />
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">₹{price}</span>
        </div>
      </div>

      <Button
        type="submit"
        variant="whatsapp"
        size="xl"
        className="w-full"
        disabled={!isValid}
      >
        <MessageCircle className="h-5 w-5" />
        Order via WhatsApp
      </Button>
    </form>
  );
};

export default OrderForm;
