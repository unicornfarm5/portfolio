const principles = [
  ['01', 'I enjoy working data-driven and in teams to solve problems.'],
  ['02', 'I am often described as detail oriented, with an overview of the whole picture.'],
  ['03', 'I like to work systematically and know what the next step is.'],
]

export function HowIWorkSection() {
  return (
    <section className="bg-[#b9c5b0] py-24">
      <div className="section-wrap">
        <h2 className="section-title mb-14">How I work</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map(([number, text]) => (
            <article key={number} className="relative aspect-square bg-[#f4f0e9] p-8 pt-24 text-[#242323]">
              <img src="/assets/pink_pin.png" alt="" aria-hidden="true" className="absolute left-1/2 top-2 w-16 -translate-x-1/2" />
              <div className="border-t border-[#242323] pt-6">
                <p className="eyebrow mb-8">{number}</p>
                <p className="text-2xl leading-tight">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}