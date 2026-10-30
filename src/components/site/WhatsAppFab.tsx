import { Whatsapp } from "iconsax-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function WhatsAppFab() {
  const { pick } = useLang();
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        pick("Namaste Ram Singh Rathore ji! I'd like to know more about LIC plans.", "नमस्ते राम सिंह राठौर जी! मुझे LIC प्लान के बारे में और जानना है।")
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label={pick("Chat on WhatsApp", "WhatsApp पर बात करें")}
      className="animate-pulse-ring fixed bottom-24 right-5 z-50 hidden h-14 w-14 place-items-center md:grid rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 md:bottom-24"
    >
      <Whatsapp size={28} variant="Bold" color="#FFFFFF" />
    </a>
  );
}