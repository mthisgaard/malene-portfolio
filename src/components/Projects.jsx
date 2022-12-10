import styles, { layout } from '../style';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className="mt-6 md:mt-0 mb-10" >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Projects</h2>
    </div>
    <div className="flex flex-wrap z-[1] justify-center">
      {projects.map((card) => (
        <ProjectCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)

export default Projects