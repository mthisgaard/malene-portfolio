import styles, { layout } from '../style';

const ProjectCard = ({ id, name, image, role, tech, url, git, description }) => (
  <div className={(id % 2 === 0) ? layout.sectionReverse : layout.section}>
    {console.log(id)}
    <div className={(id % 2 === 0) ? layout.sectionImgReverse : layout.sectionImg}>
      <img src={image} alt={name} className="w-full h-[200px] xs:w-[550px] xs:h-[400px] object-cover object-left-top hover:object-scale-down" />
    </div>
    <div className={layout.sectionInfo}>
      <div>
        <h3 className={`${styles.heading3}`}>{name}</h3>
        <p className={`${styles.paragraph} md:mt-5`}>{description}</p>
        <p className={`${styles.paragraph} mt-5`}>Role: {role}</p>
        <p className={`${styles.paragraph} mb-6`}>Tech: {tech}</p>
      </div>
      <div className={`flex gap-3 ${(id % 2 === 0) ? "md:justify-end" : ""}`}>
        <a href={url} className="bg-white py-2 px-4 rounded-lg hover:bg-gray-200">Website</a>
        <a href={git} className="bg-white py-2 px-4 rounded-lg hover:bg-gray-200">GitHub</a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
