import React from 'react'
import styles from './style';

import { About, Hero, Navbar, Projects, Skills } from './components';

const App = () => (
  <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`md:h-full ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> 

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  </div>
);

export default App
