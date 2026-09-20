const skills = [
  'HTML, JavaScript, CSS',
  'React',
  'Python',
  'SQL and NoSQL',
  'Android app development',
  'Azure VM',
  'Docker',
  'Grafana',
  'Figma',
  'User testing',
  'Eye tracking testing',
  'Basic Adobe',
]

export function About() {
  return (
    <section id="about" className="bg-[#242323] py-24 text-[#f4f0e9]">
      <div className="section-wrap grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:pt-8">
          <img
            src="/img/portrait.png"
            alt="Portrait of Linea Moltved"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="pt-8">
            <h2 className="section-title mb-8">Education</h2>
            <p className="education-institution mb-3">Erhvervsakademi København (EK)</p>
            <p className="education-copy max-w-2xl">I’m studying IT Architecture and I’m currently in my fifth semester, where I am taking an elective course in UX design and concept development, connected to the multimedia design track on school.</p>
          </div>

          <div id="skills" className="mt-20 border-t border-[#f4f0e9]/40 pt-8">
            <h2 className="section-title mb-8">Skills</h2>
            <ul className="skills-list grid grid-cols-1 gap-3 text-base sm:grid-cols-2">
              {skills.map((skill) => <li key={skill}>• {skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}