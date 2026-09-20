const skills = ['HTML, JavaScript, CSS', 'React', 'Python', 'SQL and NoSQL', 'Android app development', 'Azure VM', 'Docker', 'Grafana', 'Figma', 'User testing', 'Eye tracking', 'Basic Adobe']

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#d8d0c4] py-24">
      <div className="section-wrap grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="section-title">Skills</h2>
        <ul className="grid grid-cols-1 gap-3 font-sans text-lg sm:grid-cols-2">{skills.map((skill) => <li key={skill}>• {skill}</li>)}</ul>
      </div>
    </section>
  )
}