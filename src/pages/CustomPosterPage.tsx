import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Upload, X, MessageCircle, ImageIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { openWhatsAppOrder, OrderDetails } from "@/lib/whatsapp";

type SizeKey = "A4" | "A3" | "6:4";

const customPrices: Record<SizeKey, number> = {
  A4: 249,
  A3: 399,
  "6:4": 599,
};

const sizeDetails: Record<SizeKey, { dimensions: string }> = {
  A4: { dimensions: "21 × 29.7 cm" },
  A3: { dimensions: "29.7 × 42 cm" },
  "6:4": { dimensions: "60 × 40 cm" },
};

const CustomPosterPage = () => {
  const [selectedSize, setSelectedSize] = useState<SizeKey>("A3");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !address.trim()) {
      return;
    }

    const order: OrderDetails = {
      productName: "Custom Poster",
      size: selectedSize,
      price: customPrices[selectedSize],
      customerName: customerName.trim(),
      address: address.trim(),
      notes: notes.trim() || undefined,
      isCustom: true,
      customFileUrl: uploadedFile ? `File: ${uploadedFile.name}` : undefined,
    };

    openWhatsAppOrder(order);
  };

  const isValid = customerName.trim() && address.trim();
  const currentPrice = customPrices[selectedSize];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Custom Poster</span>
          </nav>

          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Create Your Custom Poster
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Upload your own design, photo, or artwork and we'll print it on premium quality paper.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Upload Your Design</Label>
              {!previewUrl ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-primary/50 hover:bg-secondary/50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, or PDF (MAX. 10MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
              ) : (
                <div className="relative">
                  <div className="aspect-[3/4] max-h-96 mx-auto rounded-2xl overflow-hidden bg-secondary">
                    {uploadedFile?.type.startsWith("image/") ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                        <ImageIcon className="w-16 h-16 mb-4" />
                        <p className="font-medium">{uploadedFile?.name}</p>
                        <p className="text-sm">PDF file uploaded</p>
                      </div>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full"
                    onClick={removeFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Select Size</Label>
              <div className="grid grid-cols-3 gap-4">
                {(Object.keys(customPrices) as SizeKey[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`size-option ${
                      selectedSize === size ? "selected" : "border-border"
                    }`}
                  >
                    <div className="font-bold text-xl">{size}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {sizeDetails[size].dimensions}
                    </div>
                    <div className="font-semibold mt-2">₹{customPrices[size]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid md:grid-cols-2 gap-6">
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
              <div className="space-y-2 md:col-span-2">
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
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="notes">Special Instructions (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or notes for your custom poster..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Custom Poster</span>
                  <span className="font-medium">{selectedSize} size</span>
                </div>
                {uploadedFile && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">File</span>
                    <span className="font-medium truncate max-w-[200px]">
                      {uploadedFile.name}
                    </span>
                  </div>
                )}
                <div className="border-t border-border my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-2xl">₹{currentPrice}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomPosterPage;
