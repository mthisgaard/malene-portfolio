import styles, { layout } from '../style';

const About = () => (
  <section id="about" className={`flex md:gap-16 md:flex-row flex-col ${styles.paddingY} items-start`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Me</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Hi, I'm Malene, a Web Developer located in Tokyo, who enjoys building interactive web applications from the ground up. From my background in psychology, behavioral design, and web editing, I aspire to create enjoyable and seamless user experiences.</p>
    </div>
    <div className={layout.sectionInfo}>
      <div>
        <h2 className={`${styles.heading2} mt-12 md:mt-0`}>Project Pitch</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>Check out my project pitch of JobJob. A web application to help you keep track of your job applications in one place.</p>
      </div>
      <iframe className="align-self-start" src="https://www.youtube.com/embed/yh8iZUNj8B8?start=4380" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </section>
)

export default About