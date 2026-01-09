import { Check } from "lucide-react";

type SizeKey = "A4" | "A3" | "6:4";

interface SizeSelectorProps {
  prices: Record<SizeKey, number>;
  selectedSize: SizeKey;
  onSelectSize: (size: SizeKey) => void;
}

const sizeDetails: Record<SizeKey, { dimensions: string; description: string }> = {
  A4: { dimensions: "21 × 29.7 cm", description: "Perfect for desks" },
  A3: { dimensions: "29.7 × 42 cm", description: "Great for walls" },
  "6:4": { dimensions: "60 × 40 cm", description: "Statement piece" },
};

const SizeSelector = ({ prices, selectedSize, onSelectSize }: SizeSelectorProps) => {
  const sizes: SizeKey[] = ["A4", "A3", "6:4"];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Size</label>
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`size-option ${selectedSize === size ? "selected" : "border-border"}`}
          >
            {selectedSize === size && (
              <Check className="absolute top-2 right-2 h-4 w-4" />
            )}
            <div className="font-bold text-lg">{size}</div>
            <div className="text-xs opacity-70 mt-1">{sizeDetails[size].dimensions}</div>
            <div className="font-semibold mt-2">₹{prices[size]}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
