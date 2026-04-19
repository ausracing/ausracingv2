export default function QuoteSection() {
    return (
        <section className="w-full bg-black px-4 py-20 text-white">
            <div className="mx-auto max-w-5xl">
                <div className="relative overflow-hidden rounded-2xl border border-[#fcb13b] bg-zinc-950 px-10 py-20 text-center shadow-[0_0_30px_rgba(255,215,0,0.08)]">
                    <div className="pointer-events-none absolute left-10 top-6 text-[120px] leading-none text-zinc-200/90 [font-family:var(--font-orbitron)] md:text-[150px]">
                        “
                    </div>

                    <div className="pointer-events-none absolute bottom-6 right-10 text-[90px] leading-none text-[#fcb13b] [font-family:var(--font-orbitron)] md:text-[110px]">
                        ”
                    </div>

                    <div className="relative z-10 mx-auto max-w-3xl">
                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#fcb13b] [font-family:var(--font-orbitron)]">
                            Formula Student
                        </p>

                        <blockquote className="text-xl font-semibold italic leading-relaxed text-zinc-100 [font-family:var(--font-rajdhani)] sm:text-2xl md:text-3xl">
                            “Twenty years from now you will be more disappointed by the things that you didn&apos;t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”
                        </blockquote>


                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06),transparent_55%)]" />
                </div>
            </div>
        </section>
    )
}