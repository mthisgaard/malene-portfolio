import styles from '../style';
import { malene } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col px-16`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:px-0`}>
      <img src={malene} alt="Malene" className="xs:h-[400px] md:h-[70%] relative z-[5] rounded-full object-cover" />
    </div>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[44px] text-white ss:heading-[100px] leading-[60px] md:leading-[75px]">
          MALENE 
          <br />THISGAARD
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Full-Stack Web Developer</p>
      <div className="flex text-white gap-5 text-[24px] mt-3">
        <a href="mailto:malene.thisgaard@gmail.com" target="_blank"><i className="fa-solid fa-envelope opacity-80 hover:opacity-100 duration-500 transform hover:-translate-y-1"></i></a>
        <a href="https://github.com/mthisgaard" target="_blank"><i className="fa-brands fa-github opacity-80 hover:opacity-100 duration-500 transform hover:-translate-y-1"></i></a>
        <a href="https://www.linkedin.com/in/malenethisgaard/" target="_blank"><i className="fa-brands fa-linkedin opacity-80 hover:opacity-100 duration-500 transform hover:-translate-y-1"></i></a>
      </div>
    </div>
  </section>
);

export default Hero
