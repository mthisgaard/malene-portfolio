import styles, { layout } from '../style';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className={`${styles.paddingY}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Projects</h2>
    </div>
    <div className="flex flex-col justify-center md:mx-16">
      {projects.map((card) => (
        <ProjectCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)

export default Projects