"use client"

import { useState } from "react"

export default function SponsorModal() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const form = e.target

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
        className="bg-[#fbb03a] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:brightness-95"
      >
        Become a Partner
      </button>

      
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-2xl rounded-[24px] border border-white/10 bg-[#111214] p-6 md:p-8">
            
         
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-lg"
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
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white focus:border-[#fbb03a]"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Contact Name *
                </label>
                <input
                  name="contact"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white focus:border-[#fbb03a]"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Your Role *
                </label>
                <input
                  name="role"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white focus:border-[#fbb03a]"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-gray-400">
                  Preferred Meeting Time
                </label>
                <input
                  name="time"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#17181b] px-4 text-white focus:border-[#fbb03a]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#fbb03a] py-3 text-sm font-bold uppercase tracking-[0.15em] text-black hover:brightness-95"
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