const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export function Header() {
  return (
    <header className="section-wrap flex items-center justify-between py-6">
      <a href="#top" className="text-lg font-bold">Linea Moltved Skræp</a>
      <nav aria-label="Primary navigation" className="flex gap-5 font-sans text-sm">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
    </header>
  )
}