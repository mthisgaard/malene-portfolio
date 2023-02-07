import styles, { layout } from '../style';
import Fade from 'react-reveal/Fade';

const ProjectCard = ({ id, name, image, role, tech, url, git, description }) => (
  <Fade bottom>
    <div className={`${(id % 2 === 0) ? layout.sectionReverse : layout.section}`}>
      
      <a href={url} target="_blank">
        <div className={(id % 2 === 0) ? layout.sectionImgReverse : layout.sectionImg}>
          <img src={image} alt={name} className="w-full h-[200px] xs:w-[550px] xs:h-[450px] object-cover object-left-top hover:object-scale-down" />
        </div>
      </a>
      <div className={layout.sectionInfo}>
        <div>
          <h3 className={`${styles.heading3}`}>{name}</h3>
          <p className={`${styles.paragraph} md:mt-5`}>{description}</p>
          <p className={`${styles.paragraph} mt-5`}>Role: {role}</p>
          <p className={`${styles.paragraph} mb-6`}>Tech: {tech}</p>
        </div>
        <div className={`flex gap-3 ${(id % 2 === 0) ? "md:justify-end" : ""}`}>
          <a href={url} target="_blank" className="bg-white py-2 px-4 rounded-lg opacity-80 hover:opacity-100 duration-500 transform hover:-translate-y-1">Website</a>
          <a href={git} target="_blank" className="bg-white py-2 px-4 rounded-lg opacity-80 hover:opacity-100 duration-500 transform hover:-translate-y-1">GitHub</a>
        </div>
      </div>
    </div>
  </Fade>
);

export default ProjectCard;
