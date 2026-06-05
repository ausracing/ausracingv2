"use client"

import { useState } from "react"

export default function SponsorModal() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Safely cast the target to include your exact form fields
    const form = e.target as typeof e.target & {
      company: { value: string }
      contact: { value: string }
      role: { value: string }
      time: { value: string }
    }

    const company = form.company.value
    const contact = form.contact.value
    const role = form.role.value
    const time = form.time.value

    const subject = "Sponsorship Inquiry - AUS Racing"
    const body = `
Company Name: ${company}
Contact Name: ${contact}
Role: ${role}
Preferred Meeting Time: ${time}
`

    window.location.href = `mailto:ausracing@aus.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#fbb03a] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(251,176,58,0.35)] active:scale-95"
      >
        Become a Partner
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-2xl rounded-[24px] border border-white/10 bg-[#111214] p-6 md:p-8">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer text-lg text-gray-400 transition hover:text-white"
              >
                ✕
              </button>
            </div>

            <h2 className="text-2xl font-bold text-white">
              Become a Partner
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="text-xs uppercase text-gray-400">
                  Company Name *
                </label>
                <input
                  name="company"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white outline-none transition focus:border-[#fbb03a] focus:ring-1 focus:ring-[#fbb03a]/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Contact Name *
                </label>
                <input
                  name="contact"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white outline-none transition focus:border-[#fbb03a] focus:ring-1 focus:ring-[#fbb03a]/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Your Role *
                </label>
                <input
                  name="role"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white outline-none transition focus:border-[#fbb03a] focus:ring-1 focus:ring-[#fbb03a]/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Preferred Meeting Time
                </label>
                <input
                  name="time"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white outline-none transition focus:border-[#fbb03a] focus:ring-1 focus:ring-[#fbb03a]/40"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-[#fbb03a] py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(251,176,58,0.35)] active:scale-95"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}