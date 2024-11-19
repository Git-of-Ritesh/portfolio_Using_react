import { React, useEffect, useState, Suspense, useRef } from 'react'
import { motion, easeIn, useScroll, useTransform } from 'framer-motion'
import './about.css'
import deskimage from '../../images/deskimage.jpg'
import myImage from '../../images/my image.jpeg'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Gaming from '../../Gaming'
import Music from '../../Music'
import Tennis from '../../Tennis'

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants2 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const characterVariants2 = {
    hidden: { y: 200 },
    visible: (index) => ({
      y: 0, transition: {
        delay: index * 0.1 + 2,
        duration: 0.5
      }
    }),
  };

  const characterVariants3 = {
    hidden: { y: 200 },
    visible: {
      y: 0, transition: {
        duration: 0.5
      }
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1, y: 0, transition: { duration: 0.5 }
    },
  };

  const containerVariants4 = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const characterVariants4 = {
  hidden: { y: 200 },
  visible: {
      y: 0, transition: { duration: 0.5 }
  },
};

const container = useRef(null);

const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start end', 'end start']
})

const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const About_word = "PASSIONATE".split("");
  const About_word1 = "CREATIVE".split("");
  const About_word2 = "DEVELOPER".split("");
  const About_word3 = "BASED IN".split("");
  const About_word4 = "INDIA".split("");
  const word7 = "HELLO@RITESH".split("");
  const word8 = "PANDEY.COM".split("");
  const word9 = "SERVICES".split("");

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  function hideShow() {
    const icon = document.getElementById('toggle-icon');
    if (icon.classList.contains('fa-minus')) {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
    setIsVisible(!isVisible);
  }

  function hideShow2() {
    const icon2 = document.getElementById('toggle-icon2');
    if (icon2.classList.contains('fa-minus')) {
      icon2.classList.remove('fa-minus');
      icon2.classList.add('fa-plus');
    } else {
      icon2.classList.remove('fa-plus');
      icon2.classList.add('fa-minus');
    }
    setIsVisible2(!isVisible2);
  }

  function hideShow3() {
    const icon3 = document.getElementById('toggle-icon3');
    if (icon3.classList.contains('fa-minus')) {
      icon3.classList.remove('fa-minus');
      icon3.classList.add('fa-plus');
    } else {
      icon3.classList.remove('fa-plus');
      icon3.classList.add('fa-minus');
    }
    setIsVisible3(!isVisible3);
  }

  // js for personal interest

  const interest = ['GAMING', 'MUSIC', 'TENNIS'];
  const [ActiveInterest, setActiveInterest] = useState(interest[0]);
  const [clicked, setClicked] = useState(false);


  const handleClick = (interest) => {
    setActiveInterest(interest);
    setClicked(!clicked);
  };








  return (
    <div className='aboutpage'>

      <motion.header
        initial={{ y: "-200%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <h4>Currently Web developer
          <br />
          Intern at Novexus
        </h4>

        <h4>
          Based in Prayagraj
          <br />
          India
        </h4>
      </motion.header>

      {/* section 1 */}

      <section className='about-sec-1'>

        <div className='uppr-sec1'>

          <div className='Sno'>
            <motion.h4
            initial={{y:50 , opacity: 0}}
            animate={{y: 0 , opacity: 1}}
            style={{ display: "inline-flex", overflow: "hidden" }}
            transition={{delay:2.5, easeIn , duration: 0.8}}
            >01/</motion.h4>
          </div>

          <div className='sec1-upper-head'>
            <motion.h1
              variants={containerVariants2}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {About_word.map((char, index) => (
                <motion.span key={index} custom={index} variants={characterVariants2}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              variants={containerVariants2}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {About_word1.map((char, index) => (
                <motion.span key={index} custom={index} variants={characterVariants2}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              variants={containerVariants2}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {About_word2.map((char, index) => (
                <motion.span key={index} custom={index} variants={characterVariants2}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              style={{ display: "inline-block", overflow: "hidden" }}
              transition={{ duration: 0.8, easeIn, delay: 2.8 }}
              className='sec1-upper-head-img'>
              <motion.img style={{y:sm}} className='sec1-upper-headimg' src={deskimage} alt="" />
            </motion.div>

            <motion.h1
              variants={containerVariants2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {About_word3.map((char, index) => (
                <motion.span key={index} style={char === " " ? { marginRight: "16px" } : {}} variants={characterVariants3}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              variants={containerVariants2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {About_word4.map((char, index) => (
                <motion.span key={index} variants={characterVariants3}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

          </div>

        </div>

        <div className='lower-sec1'>

          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          style={{ display: "inline-block", overflow: "hidden" }}
          transition={{ duration: 0.8, easeIn }}
          className='lower-sec-1'>
            <p>Voyage of the Inquisitive Mind</p>
          </motion.div>

          <motion.div 
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0 }}
           style={{ display: "inline-block", overflow: "hidden" }}
           transition={{ duration: 0.8, easeIn }}
          className='lower-sec-2'>
            <p>I am a creative developer with a deep passion for building products that are both functional and visually appealing. My experience includes working with individuals and teams across sectors,including some considerable internships.</p>

            <p>I view Each project as an opportunity to expand my knowledge, integrating concepts from diverse areas such as art, mathematics, and physics.</p>

            <motion.div
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             style={{ display: "inline-block", overflow: "hidden" }}
             transition={{ duration: 0.8, easeIn }}
             className='my-image'>
              <motion.img style={{y: sm}} src={myImage} alt="" />
            </motion.div>
          </motion.div>

        </div>

      </section>

      {/* section 2 */}

      <section className='about-sec2'>
        <div className='upper-sec2'>

          <div>
            <motion.h4
             initial={{y:50 , opacity: 0}}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0 }}
             style={{ display: "inline-flex", overflow: "hidden" }}
             transition={{delay: 0, easeIn , duration: 0.8}}
            >02/</motion.h4>
          </div>

          <div className='services-div'>

            <div><motion.h1
            variants={containerVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex", overflow: "hidden" }}
            >
              {word9.map((char, index) => (
                <motion.span key={index} custom={index} variants={characterVariants3}>
                  {char}
                </motion.span>
              ))}</motion.h1></div>

            <hr className='line' />

            <div className='services-div-1'>

              <div className='services-div-1-1'>
                <div><h4>01</h4></div>
                <div className='services-detail-div-1'>
                  <div><h4>Frontend development / Engineering</h4></div>
                  <div id='main' className='detail-div1' style={{ display: isVisible ? 'block' : 'none' }}><h4>I architect, develop, and optimize front-end web applications that are scalable, maintainable, and user-friendlye</h4></div>
                </div>
              </div>

              <div>
                <span><motion.i id='toggle-icon' onClick={hideShow} style={{ cursor: 'pointer' }} class="fa-solid fa-plus fa-lg"
                  animate={{ rotate: isVisible ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.i></span>
              </div>

            </div>

            <hr className='subline' />

            <div className='services-div-1'>

              <div className='services-div-1-1'>
                <div><h4>02</h4></div>
                <div className='services-detail-div-1'>
                  <div><h4>Create Designs / impliment animations</h4></div>
                  <div id='main' className='detail-div1' style={{ display: isVisible2 ? 'block' : 'none' }}><h4>I design and implement interactive animations on websites, ensuring that they are visually engaging, user-friendly, and seamlessly integrated with the overall design.</h4></div>
                </div>
              </div>

              <div>
                <span><motion.i id='toggle-icon2' onClick={hideShow2} style={{ cursor: 'pointer' }} class="fa-solid fa-plus fa-lg"
                  animate={{ rotate: isVisible2 ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.i></span>
              </div>

            </div>

            <hr className='subline' />

            <div className='services-div-1'>

              <div className='services-div-1-1'>
                <div><h4>03</h4></div>
                <div className='services-detail-div-1'>
                  <div><h4>Creative Implimenting </h4></div>
                  <div id='main' className='detail-div1' style={{ display: isVisible3 ? 'block' : 'none' }}><h4>I creatively implement engaging animations and interactive designs to build websites that captivate users and enhance their experience.</h4></div>
                </div>
              </div>

              <div>
                <span><motion.i id='toggle-icon3' onClick={hideShow3} style={{ cursor: 'pointer' }} class="fa-solid fa-plus fa-lg"
                  animate={{ rotate: isVisible3 ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.i></span>
              </div>

            </div>

            <hr className='subline' />

          </div>

        </div>

      </section>

      {/* section 3 */}

      <section className='about-section3'>

        <div className='about-section3-head'>

          <div><motion.h4
           initial={{y:50 , opacity: 0}}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0 }}
           style={{ display: "inline-flex", overflow: "hidden" }}
           transition={{delay: 0, easeIn , duration: 0.8}}
          >03/</motion.h4></div>

          <div className='w-px'><motion.h4
           initial={{y:50 , opacity: 0}}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0 }}
           style={{ display: "inline-flex", overflow: "hidden" }}
           transition={{delay: 0, easeIn , duration: 0.8}}
          >PERSONAL INTERESTS</motion.h4></div>

          <div><motion.h4
           initial={{y:50 , opacity: 0}}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0 }}
           style={{ display: "inline-flex", overflow: "hidden" }}
           transition={{delay: 0, easeIn , duration: 0.8}}
          >DRAG AROUND</motion.h4></div>

        </div>

        <div className='sec3-interets-head'>

          {interest.map((interest, index) => (

            <motion.div
              key={index}
              className={`pointer ${ActiveInterest === interest ? 'active' : 'not-active'}`}
              onClick={() => handleClick(interest)}
              initial={{ x: 0 }}
              animate={{ x: clicked ? '-250px' : '0px' }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <button><h1>{interest}</h1></button>
            </motion.div>

          ))};

        </div>


        {ActiveInterest === 'GAMING' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5,  ease: "easeInOut"}}
            className='sec3-interets-detail'>

            <motion.div
             initial={{ scale:0, opacity: 0 }}
             animate={{ scale:1, opacity: 1 }}
             transition={{ duration: 0.5,  ease: "easeInOut"}}
             className='detail1-sec3'>
              <h4>ONLINE FPS GAMES</h4>
              <h4>I enjoy the thrill of playing FPS games like VALORENT and CALL OF DUTY, where quick reflexes and strategy are key. The fast-paced action and teamwork push me to constantly improve and dominate the competition. </h4>
            </motion.div>
            <div className='item1-sec3'>
              <Canvas>
                <ambientLight intensity={3} />
                <OrbitControls enableZoom={false} target={[0, 0, -3]} />
                <Suspense fallback={null}>
                  <Gaming position={[0, -2, 0]} />
                </Suspense>
              </Canvas>
            </div>

          </motion.div>
        )}

        {ActiveInterest === 'MUSIC' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='sec3-interets-detail'>

            <motion.div 
            initial={{scale:0, opacity: 0 }}
            animate={{ scale:1,opacity: 1 }}
            transition={{ duration: 0.5,  ease: "easeInOut"}}
            className='detail1-sec3'>
              <h4>LOVE TO HEAR SOOTHING SOUNDS</h4>
              <h4>Music fuels my creativity and passion, enriching both my work and personal life. From energizing beats to soothing melodies, it’s a constant source of inspiration.</h4>
            </motion.div>
            <div className='item2-sec3'>
              <Canvas>
                <ambientLight intensity={2} />
                <OrbitControls enableZoom={false} target={[0, 0, -16]} />
                <Suspense fallback={null}>
                  <Music position={[0, -7, -4]} scale={[8, 8, 8]} />
                </Suspense>
              </Canvas>
            </div>

          </motion.div>
        )}

        {ActiveInterest === 'TENNIS' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='sec3-interets-detail'>

            <motion.div 
            initial={{scale:0, opacity: 0 }}
            animate={{scale:1, opacity: 1 }}
            transition={{ duration: 0.5,  ease: "easeInOut"}}
            className='detail1-sec3'>
              <h4>A PASSIONATE SPORTS PERSON</h4>
              <h4>I’m passionate about sports, with a strong background in table tennis as a TWO-TIMES GOLD MEADLIST at the district level. This competitive edge translates into my work, where I bring the same dedication and drive to everything I do.</h4>
            </motion.div>
            <div className='item3-sec3'>
              <Canvas>
                <ambientLight intensity={1} />
                <OrbitControls enableZoom={false} target={[0, 0, -2]} />
                <Suspense fallback={null}>
                  <Tennis position={[0, 0, -2]} scale={[1, 1, 1]} />
                </Suspense>
              </Canvas>
            </div>

          </motion.div>
        )}



      </section >

      <section className='home-sec-4'>

        <div>
          <motion.h4
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='flex-strt'>04/</motion.h4>
        </div>

        <div>
          <motion.h4
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='wd'>WANT TO WORK TOGETHER?</motion.h4>
        </div>

        <div>
          <motion.h4
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='wd'>SEND ME A MESSAGE</motion.h4>
        </div>

      </section>

      <section className='email-sec-2' >
        <div className='email-div-2'>

          <motion.a
            href="/"
            className="nav-link12"
            variants={containerVariants4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word7.map((char, index) => (
              <motion.span key={index} variants={characterVariants4}>
                {char}
              </motion.span>
            ))}
          </motion.a>

          <motion.a
            href="/"
            className="nav-link13"
            variants={containerVariants4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word8.map((char, index) => (
              <motion.span key={index} variants={characterVariants4}>
                {char}
              </motion.span>
            ))}
          </motion.a>
        </div>

      </section>




      <motion.div className='slidein'
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "0%", "100%"] }}
        transition={{ duration: 2, times: [0, 0.3, 0.7, 1], ease: [0.6, 0.8, 0.2, 1] }}
      />

    </div >
  )
}

