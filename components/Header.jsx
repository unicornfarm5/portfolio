const links = [
  ['About', '/#about'],
  ['Projects', '/#/projects'],
  ['Contact', '/#contact'],
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#242323] text-[#f4f0e9]">
      <div className="section-wrap flex items-center justify-between py-6">
        <a href="/" className="text-lg font-bold">Linea Moltved Skræp</a>
        <nav aria-label="Primary navigation" className="header-links flex gap-5">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}