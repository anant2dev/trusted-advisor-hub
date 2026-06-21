import { Link, useRouterState } from "@tanstack/react-router";
import { Call, ArrowRight, Whatsapp } from "iconsax-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_NUMBER } from "@/lib/site";

// Sticky bottom conversion bar. Hides on the booking page itself
// (the page IS the CTA there) and on the 404 route.
const HIDE_ON = ["/book-appointment"];

export function StickyCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hidden = HIDE_ON.some((p) => pathname.startsWith(p));

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="sticky-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/90 px-3 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/75 md:px-6"
          style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-bold text-foreground">
                One unhurried call. Zero pressure.
              </p>
              <p className="truncate text-[11px] text-muted-foreground">
                IRDAI-licensed · 20+ years · Lifetime after-sales service
              </p>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02]"
              >
                <Whatsapp size={16} variant="Bold" color="#FFFFFF" />
                <span className="hidden xs:inline sm:inline">WhatsApp</span>
              </a>
              <Link
                to="/book-appointment"
                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-navy px-3.5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02] sm:flex-none"
              >
                <Call size={16} variant="Bold" color="#F4C430" />
                Book Appointment
                <ArrowRight
                  size={14}
                  variant="Bold"
                  color="#F4C430"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}