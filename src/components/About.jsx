import styles, { layout } from '../style';

const About = () => (
  <section id="about" className={`${layout.section} items-start`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Hi, I'm Malene, a Web Developer located in Tokyo, who enjoys building interactive web applications from the ground up. From my background in psychology, behavioral design, and web editing, I aspire to create enjoyable and seamless user experiences.</p>
    </div>
    <div className={layout.sectionInfo}>
      <div>
        <h2 className={styles.heading2}>JobJob Project Pitch</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>Check out my project pitch of JobJob. A web application to help you keep track of your job applications in one place.</p>
      </div>
      <iframe class="align-self-start" src="https://www.youtube.com/embed/yh8iZUNj8B8?start=4380" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </section>
)

export default About