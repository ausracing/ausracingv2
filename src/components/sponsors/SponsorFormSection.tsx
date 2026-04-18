export default function SponsorFormSection() {
  return (
    <section className="bg-[#0a0a0a] py-16 text-white">
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
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Acme Engineering Ltd."
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Contact Name *
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Your Role *
              </label>
              <input
                type="text"
                placeholder="e.g. Marketing Director, CEO"
                className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40"
              />
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
                placeholder="e.g. Weekday mornings, Thursdays after 2pm"
                className="h-14 w-full rounded-xl border border-white/10 bg-[#17181b] px-5 text-base text-white outline-none placeholder:text-gray-500 focus:border-[#fbb03a]/40"
              />
            </div>

            <button
              type="submit"
              className="h-16 w-full bg-[#fbb03a] text-base font-bold uppercase tracking-[0.14em] text-black transition hover:brightness-95"
            >
              Submit Partnership Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}