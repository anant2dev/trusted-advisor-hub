import { Whatsapp } from "iconsax-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Namaste Ram Singh Rathore ji! I'd like to know more about LIC plans."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <Whatsapp size={28} variant="Bold" color="#FFFFFF" />
    </a>
  );
}