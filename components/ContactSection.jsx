const email = String.fromCharCode(
  108, 105, 110, 101, 97, 46, 109, 111, 108, 116, 118, 101, 100,
  64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
)

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#b9c5b0] py-16">
      <div className="section-wrap grid gap-12 md:grid-cols-[1fr_1fr_auto]">
        <div><p className="eyebrow mb-5">Want to meet for coffee?</p><h2 className="section-title">Let&apos;s talk.</h2></div>
        <div className="body-copy self-end">
          <p>Copenhagen, Denmark</p>
          <a href={`mailto:${email}`} className="mt-4 inline-block underline">{email}</a>
        </div>
        <div className="flex items-end gap-6 self-end">
          <a
            href="https://www.linkedin.com/in/linea-moltved-2ab879348/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Linea Moltved on LinkedIn"
            className="transition-opacity hover:opacity-70"
          >
            <img src="/img/linkedIn.png" alt="LinkedIn" className="h-12 w-12 scale-155 object-contain" />
          </a>
          <a
            href="https://github.com/unicornfarm5"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Linea Moltved on GitHub"
            className="transition-opacity hover:opacity-70"
          >
            <img src="/img/github.png" alt="GitHub" className="h-12 w-12 object-contain" />
          </a>
        </div>
      </div>
    </section>
  )
}