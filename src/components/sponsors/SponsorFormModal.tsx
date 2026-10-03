"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendSponsorEmail } from "@/actions/sendSponsorEmail";

export default function SponsorFormModal() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null);
    startTransition(async () => {
      const result = await sendSponsorEmail(formData);
      if (result?.error) {
        setStatus({ error: result.error });
      } else if (result?.success) {
        setStatus({ success: true });
        formRef.current?.reset();
        
        // Auto-close the modal after 5 seconds
        timeoutRef.current = setTimeout(() => {
          handleClose();
        }, 4000);
      }
    });
  }

  // Handle manual or automatic closing safely
  function handleClose() {
    setOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Wait for the exit animation to finish before resetting the form state
    setTimeout(() => setStatus(null), 300);
  }

  // Cleanup timeout if the component unmounts unexpectedly
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#fbb03a] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(251,176,58,0.35)] active:scale-95"
      >
        Become a Partner
      </button>

      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 py-6"
            onClick={handleClose}
          >
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              // Dynamically shrink the wrapper width and center text on success
              className={`relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] p-6 text-white shadow-2xl md:p-8 ${
                status?.success
                  ? "max-w-sm text-center"
                  : "max-h-[90vh] max-w-2xl overflow-y-auto"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-6 top-6 z-10 cursor-pointer text-3xl text-gray-400 transition hover:text-white"
              >
                ×
              </button>

              {status?.success ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="flex flex-col items-center justify-center py-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#fbb03a]/30 bg-[#fbb03a]/10 text-[#fbb03a]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wide text-white">
                    Request Sent
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Our team will be in touch within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8 pr-10">
                    <div className="inline-flex items-center rounded-full border border-[#fbb03a]/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fbb03a]">
                      Get In Touch
                    </div>
                    <h2 className="mt-4 text-2xl font-black uppercase md:text-4xl">
                      Partner With <span className="text-[#fbb03a]">AUS Racing</span>
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Fill in the form below and our External Relations team will get back to you within 48 hours.
                    </p>
                  </div>

                  <form ref={formRef} action={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          placeholder="Company Ltd."
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#17181b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          placeholder="Jane Smith"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#17181b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Your Role *
                        </label>
                        <input
                          type="text"
                          name="role"
                          required
                          placeholder="e.g. Marketing Director, CEO"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#17181b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="jane@company.com"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#17181b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                        Preferred Meeting Time{" "}
                        <span className="normal-case tracking-normal text-gray-500">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="meetingTime"
                        placeholder="e.g. Weekday mornings, Thursdays after 2pm"
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#17181b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                      />
                    </div>

                    {status?.error && (
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                        {status.error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isPending}
                      className="mt-2 flex h-14 w-full items-center justify-center rounded-xl bg-[#fbb03a] text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isPending ? "Sending..." : "Submit Partnership Request"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}