export function ContactSection() {
  return (
    <section id="contact" className="bg-[#b9c5b0] py-24">
      <div className="section-wrap grid gap-12 md:grid-cols-2">
        <div><p className="eyebrow mb-5">Want to meet for coffee?</p><h2 className="section-title">Let&apos;s talk.</h2></div>
        <div className="body-copy self-end">
          <p>Copenhagen, Denmark</p>
          <a href="mailto:linea.moltved@gmail.com" className="mt-4 inline-block underline">linea.moltved@gmail.com</a>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/linea-moltved-2ab879348/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Linea Moltved on LinkedIn"
              className="transition-opacity hover:opacity-70"
            >
              <img src="/img/linkedIn.png" alt="LinkedIn" className="h-10 w-10 object-contain" />
            </a>
            <a
              href="https://github.com/unicornfarm5"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Linea Moltved on GitHub"
              className="transition-opacity hover:opacity-70"
            >
              <img src="/img/github.png" alt="GitHub" className="h-10 w-10 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}