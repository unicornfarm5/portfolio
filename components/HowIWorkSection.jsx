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
        <div className="grid gap-10 md:grid-cols-3">{principles.map(([number, text]) => <div key={number} className="border-t border-current pt-4"><p className="eyebrow mb-8">{number}</p><p className="text-2xl leading-tight">{text}</p></div>)}</div>
      </div>
    </section>
  )
}