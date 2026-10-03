"use client";

import { useState, useTransition, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendSponsorEmail } from "@/actions/sendSponsorEmail";

export default function SponsorFormSection() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null);
    startTransition(async () => {
      const result = await sendSponsorEmail(formData);
      if (result?.error) {
        setStatus({ error: result.error });
      } else if (result?.success) {
        setStatus({ success: true });
        formRef.current?.reset();
      }
    });
  }

  return (
    <section id="partner-form" className="bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#fbb03a]/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fbb03a]">
            Get In Touch
          </div>

          <h2 className="mt-6 text-4xl font-black uppercase leading-none md:text-6xl">
            <span className="text-white">Become A </span>
            <span className="text-[#fbb03a]">Partner</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            Fill in the form below and our External Relations team will get back
            to you within 48 hours to discuss a package that works for you.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[24px] border border-white/8 bg-[#111214] p-6 md:p-10">
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder="Acme Engineering Ltd."
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40 transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Contact Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  placeholder="Jane Smith"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40 transition"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Your Role *
                </label>
                <input
                  type="text"
                  name="role"
                  required
                  placeholder="e.g. Marketing Director, CEO"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40 transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@acme.com"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40 transition"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Preferred Meeting Time{" "}
                <span className="normal-case tracking-normal text-gray-500">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                name="meetingTime"
                placeholder="e.g. Weekday mornings, Thursdays after 2pm"
                className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40 transition"
              />
            </div>

            <AnimatePresence mode="wait">
              {status?.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-red-500/10 p-4 border border-red-500/20 text-red-400 text-sm"
                >
                  {status.error}
                </motion.div>
              )}
              {status?.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-green-500/10 p-4 border border-green-500/20 text-green-400 text-sm"
                >
                  Request sent successfully. Our team will be in touch shortly!
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isPending}
              className="group relative flex h-16 w-full items-center justify-center bg-[#fbb03a] text-base font-bold uppercase tracking-[0.14em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? (
                <>
                  <svg
                    className="mr-3 h-5 w-5 animate-spin text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit Partnership Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}