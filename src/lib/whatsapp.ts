// WhatsApp integration utility
const ADMIN_WHATSAPP = "919876543210"; // Replace with actual admin number

export interface OrderDetails {
  productName: string;
  productImage?: string;
  size: string;
  price: number;
  customerName: string;
  address: string;
  notes?: string;
  isCustom?: boolean;
  customFileUrl?: string;
}

export const formatOrderMessage = (order: OrderDetails): string => {
  const lines = [
    "🛒 *New Order from Origin Media*",
    "",
    `📦 *${order.isCustom ? "Custom Poster Order" : "Product"}:* ${order.productName}`,
    `📐 *Size:* ${order.size}`,
    `💰 *Price:* ₹${order.price}`,
    "",
    `👤 *Customer:* ${order.customerName}`,
    `📍 *Delivery Address:*`,
    order.address,
  ];

  if (order.notes) {
    lines.push("", `📝 *Notes:* ${order.notes}`);
  }

  if (order.productImage) {
    lines.push("", `🖼️ *Poster Preview:* ${order.productImage}`);
  }

  if (order.customFileUrl) {
    lines.push("", `📎 *Custom Design File:* ${order.customFileUrl}`);
  }

  lines.push("", "---", "Sent via Origin Media Website");

  return lines.join("\n");
};

export const openWhatsAppOrder = (order: OrderDetails): void => {
  const message = formatOrderMessage(order);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const openWhatsAppChat = (): void => {
  const message = encodeURIComponent("Hi! I'm interested in your posters.");
  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};
