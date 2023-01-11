import styles, { layout } from '../style';

const About = () => (
  <section id="about" className={`flex md:gap-16 md:flex-row flex-col ${styles.paddingY} items-start`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Me</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Hi there 👋 I'm Malene, a Web Developer located in Tokyo.</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> I relocated to Japan from Denmark to kickstart my career in Web Development and I am excited to combine my MSc in Psychology and background in behavioral design, and web editing with my full-stack coding skills, to create enjoyable and seamless user experiences.</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With experience in both front- and backend development, I aspire to be part of every step of the process, building projects from the ground up.</p>
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