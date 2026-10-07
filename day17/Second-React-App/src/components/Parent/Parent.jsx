import { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  const [skills, setSkills] = useState([
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "TypeScript",
  ]);
  const [newSkill, setNewSkill] = useState("");

  function addSkill(e) {
    e.preventDefault();
    const skill = newSkill.trim();
    if (!skill || skills.includes(skill)) return;
    setSkills([...skills, skill]);
    setNewSkill("");
  }

  function removeSkill(skillName) {
    setSkills(skills.filter((skill) => skill !== skillName));
  }

  return (
    <section id="skills" className="py-4">
      <div className="card">
        <div className="card-body p-4">
          <h2 className="h4">Skills</h2>
          <p className="text-muted">My core technical skills:</p>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {skills.length === 0 && (
              <span className="text-muted">No skills yet. Add one below.</span>
            )}
            {skills.map((skill) => (
              <Child key={skill} skill={skill} onRemove={removeSkill} />
            ))}
          </div>

          <form className="d-flex gap-2" onSubmit={addSkill}>
            <input
              className="form-control"
              placeholder="Add a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button className="btn btn-calm" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
