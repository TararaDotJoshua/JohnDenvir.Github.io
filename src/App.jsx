import { useState } from 'react'
import './App.css'

const person = {
  name: 'John Denvir',
  title: 'Sustainability Student, Environmental Consultant, and Applied Researcher',
  intro:
    'I build practical sustainability solutions across consulting, aquaculture research, and circular-economy project design.',
  location: 'Flagler Beach, FL',
  email: 'jdenvir@ymail.com',
  phone: '(732) 639-3041',
  linkedin: 'linkedin.com/in/john-denvir-034ba61b7',
}

const experience = [
  {
    role: 'Environmental / Ecological Consultant Intern',
    org: 'UES Professional Solutions',
    period: 'Apr 2025 - Present',
    points: [
      'Completed site visits and desktop reviews for Phase I ESAs and preliminary natural resource assessments.',
      'Delivered technical reporting with ArcGIS Pro and AutoCAD LT workflows.',
      'Supported geotechnical reporting and lab execution across departments.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Florida Tech AquaLab',
    period: 'Feb 2025 - Present',
    points: [
      'Studied microbial community structure across seagrass growing substrates.',
      'Analyzed substrate-linked trends and translated data into research visuals.',
      'Presented findings at the Northrop Grumman Engineering & Science Student Design Showcase.',
    ],
  },
  {
    role: 'ESG Consultant Intern',
    org: 'WeNetwork.app (Remote)',
    period: 'May 2024 - Sep 2024',
    points: [
      'Built communication and stakeholder engagement skills in ESG-focused projects.',
      'Contributed in remote-first consulting operations.',
    ],
  },
]

const projects = [
  {
    id: 'seagrass',
    name: 'Seagrass Microbial Community Research',
    summary:
      'Research on microbial communities in seagrass substrates to improve restoration strategy and outcomes.',
    image: '/seagrass-poster.jpg',
    objective:
      'Determine how substrate composition influences microbial community development and seagrass performance over time.',
    scope:
      'Florida Tech AquaLab controlled setup with repeated observations across different substrate conditions.',
    methods: [
      'Tracked microbial development trends by substrate type.',
      'Analyzed plant growth indicators and substrate-specific differences.',
      'Prepared visual summaries and technical poster content for showcase presentation.',
    ],
    outcomes: [
      'Identified substrate combinations with stronger microbial development signals.',
      'Produced presentation-ready findings for faculty and public technical audiences.',
      'Built a repeatable framework for future restoration-oriented substrate testing.',
    ],
    tools: ['Data analysis', 'Technical reporting', 'Research presentation'],
    status: 'Active',
  },
  {
    id: 'yeast-feed',
    name: 'Recycling Spent Brewing Yeast as Fish Feed Supplement',
    summary:
      'SUS4000 project plan on converting brewery waste into viable aquaculture feed supplementation.',
    objective:
      'Evaluate whether spent brewing yeast can partially replace commercial feed while preserving fish growth and survival.',
    scope:
      'Treatment design for 0%, 10%, 20%, and 30% yeast inclusion in pompano feed under controlled aquaculture conditions.',
    methods: [
      'Established pre-treatment protocol: dehydration at 140F for 8 hours and pellet reformulation.',
      'Defined monitoring plan for fish behavior, weight, length, survival, and water quality.',
      'Built analysis/visualization plan for growth curves, treatment comparisons, and final poster outputs.',
    ],
    outcomes: [
      'Designed a practical circular-economy workflow linking brewery byproducts to aquaculture use.',
      'Set measurable benchmarks for viability at moderate inclusion levels (especially 20%).',
      'Created a scalable experiment structure ready for extended trials and optimization.',
    ],
    tools: ['Experimental design', 'Aquaculture monitoring', 'Sustainability analysis'],
    status: 'Planned / In progress',
  },
]

const education = [
  {
    school: 'Florida Institute of Technology',
    degree: 'B.S. Sustainability Studies',
    period: 'Aug 2022 - May 2026',
    note: 'GPA 3.75',
  },
  {
    school: 'Henry Hudson Regional School',
    degree: 'STEM School Graduate',
    period: 'Sep 2016 - Jun 2022',
    note: 'GPA 3.99',
  },
]

const skills = [
  'Leadership',
  'Communication',
  'Time Management',
  'ArcGIS Pro',
  'AutoCAD LT',
  'Microsoft Office',
  'Adobe Products',
  'Environmental Consulting',
]

function ExperienceList() {
  return (
    <div className="exp-list">
      {experience.map((job) => (
        <article key={job.role}>
          <h3>{job.role}</h3>
          <p className="meta">{job.org} | {job.period}</p>
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ProjectCards() {
  const [activeProjectId, setActiveProjectId] = useState(null)
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null

  return (
    <>
      <div className="project-cards project-cards-interactive">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-card-tile"
            onClick={() => setActiveProjectId(project.id)}
          >
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <p><strong>Objective:</strong> {project.objective}</p>
            <p className="project-card-hint">Click to see more</p>
          </button>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProjectId(null)}
          role="presentation"
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActiveProjectId(null)}
              aria-label="Close project details"
            >
              Close
            </button>
            <h3 id="project-modal-title">{activeProject.name}</h3>
            {activeProject.image && (
              <img
                src={activeProject.image}
                alt={`${activeProject.name} showcase poster`}
                className="project-modal-image"
              />
            )}
            <p>{activeProject.summary}</p>
            <p><strong>Objective:</strong> {activeProject.objective}</p>
            <p><strong>Scope:</strong> {activeProject.scope}</p>
            <p><strong>Tools:</strong> {activeProject.tools.join(', ')}</p>
            <div className="project-modal-grid">
              <div>
                <h4>Methods</h4>
                <ul>
                  {activeProject.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Outcomes</h4>
                <ul>
                  {activeProject.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default function App() {
  return (
    <main className="page live-site">
      <section className="web-shell">
        <header className="web-hero">
          <p className="eyebrow">John Denvir Portfolio</p>
          <h1>{person.name}</h1>
          <p className="lead">{person.title}</p>
          <p>{person.intro}</p>
          <div className="hero-actions">
            <a href={`mailto:${person.email}`}>Contact</a>
            <a href="#featured">See Projects</a>
          </div>
        </header>

        <section id="featured" className="full-width-section">
          <article>
            <h2>Featured Work</h2>
            <ProjectCards />
          </article>
        </section>

        <section className="web-columns">
          <article>
            <h2>Current Experience</h2>
            <ExperienceList />
          </article>
          <article>
            <h2>Skills + Education</h2>
            <div className="pill-set">{skills.map((s) => <span key={s}>{s}</span>)}</div>
            {education.map((e) => (
              <div key={e.school} className="mini-item">
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
                <p className="meta">{e.period} | {e.note}</p>
              </div>
            ))}
          </article>
        </section>

        <section className="cta-panel">
          <h2>Open to internships and sustainability project collaboration</h2>
          <p>{person.location}</p>
          <p>{person.email} | {person.phone}</p>
          <p>{person.linkedin}</p>
        </section>
      </section>
    </main>
  )
}
