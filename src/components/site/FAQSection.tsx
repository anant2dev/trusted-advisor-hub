import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageQuestion } from "iconsax-react";

const DEFAULT_FAQ = [
  {
    q: "Are you an authorized LIC of India agent?",
    a: "Yes — IRDAI-licensed and attached to LIC of India, Agra Mandal, since 2003. My agency code can be verified on the official LIC agent portal. Every policy I service is issued directly by LIC; nothing is brokered through a third party.",
  },
  {
    q: "Will my personal details be saved in a database?",
    a: "No. This website carries no backend database. The booking form runs entirely on your device and only opens WhatsApp or your email client with a draft. Your information stays between you and me — handled with the same confidentiality you'd expect from a family doctor.",
  },
  {
    q: "Do you charge any consultation or advisory fee?",
    a: "Never. LIC of India pays a regulated commission directly from the insurer once a policy is issued. You will never receive an invoice from me — for the first call, for premium reminders, or for claim assistance years later.",
  },
  {
    q: "I live outside Agra (or outside India). Can you still help?",
    a: "Yes. I service families across India and the diaspora — GCC countries, the UK, Singapore, the USA and Australia. NRI KYC, medical scheduling and signature flows are handled digitally end-to-end.",
  },
  {
    q: "What happens after I take a policy? Will I have to chase you for service?",
    a: "Lifetime after-sales service is part of the relationship, not an extra. I personally follow up on premium reminders, NACH issues, policy revivals, loans, maturities and — when the time comes — claim paperwork for the nominee. At no additional cost.",
  },
  {
    q: "How long does a first consultation usually take?",
    a: "A first conversation typically runs 25–40 minutes — unhurried, with patient listening before any recommendation. There is no script, no slide deck and zero pressure to decide on the same call.",
  },
];

export function FAQSection({
  items = DEFAULT_FAQ,
  title = "Frequently asked questions",
  intro = "Honest answers to what most families ask before our first call.",
}: {
  items?: { q: string; a: string }[];
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold shadow-md">
            <MessageQuestion size={22} variant="Bold" color="#F4C430" />
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{intro}</p>
        </div>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={"item-" + i}
              className="rounded-xl border border-border bg-card px-4 mb-3 shadow-sm transition-all hover:border-gold/50"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-relaxed text-ink-soft">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}