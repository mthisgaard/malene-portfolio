import styles, { layout } from '../style';

const ProjectCard = ({ id, name, image, role, tech, url, git, description }) => (
  <div className={layout.sectionReverse}>
    {console.log(id)}
    <div className={layout.sectionImgReverse}>
      <img src={image} alt={name} className="w-[360px] h-[360px] object-cover object-left-top hover:object-scale-down" />
    </div>
    <div className={layout.sectionInfo}>
      <h3 className={`${styles.heading3}`}>{name}</h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{description}</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Role: {role}</p>
      <p className={`${styles.paragraph} max-w-[470px] mb-6`}>Tech: {tech}</p>
      <div className="flex gap-3">
        <a href={url} className="bg-white py-2 px-4 rounded-lg hover:bg-gray-200">Website</a>
        <a href={git} className="bg-white py-2 px-4 rounded-lg hover:bg-gray-200">GitHub</a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
