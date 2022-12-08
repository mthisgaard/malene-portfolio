import styles, { layout } from '../style';
import { frontskills, backskills, otherskills } from '../constants';

const Skills = () => (
  <section id="skills">
    <div className="flex flex-col justify-center mt-12 md:mt-0">
      <h2 className={styles.heading2}>Skills</h2>
      <div className={`mt-8 md:w-[70%]`}>
        <div className="flex items-start flex-wrap">
          {frontskills.map((skill, index) => (
            <div className="px-4 flex flex-col items-center mb-8 group">
              <img src={skill.icon} alt={skill.title} className="w-[30px] md:w-[40px]"/>
              <h3 className="text-white text-semibold mt-2 md:scale-0 md:group-hover:scale-100">{skill.title}</h3>
            </div> 
          ))}
          {backskills.map((skill, index) => (
            <div className="px-4 flex flex-col items-center mb-8 group">
              <img src={skill.icon} alt={skill.title} className="w-[30px] md:w-[40px]"/>
              <h3 className="text-white text-semibold mt-2 md:scale-0 md:group-hover:scale-100">{skill.title}</h3>
            </div> 
          ))}
          {otherskills.map((skill, index) => (
            <div className="px-4 flex flex-col items-center mb-8 group">
              <img src={skill.icon} alt={skill.title} className="w-[30px] md:w-[40px]"/>
              <h3 className="text-white text-semibold mt-2 md:scale-0 md:group-hover:scale-100">{skill.title}</h3>
            </div> 
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Skills