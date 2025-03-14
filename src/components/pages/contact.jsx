import { React, useEffect } from 'react'
import { motion } from 'framer-motion'
import './contact.css'

export const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants5 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const characterVariants5 = {
    hidden: { y: 200 },
    visible: {
      y: 0, transition: { duration: 0.5 }
    },
  };

  const containerVariants6 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const characterVariants6 = {
    hidden: { y: 200 },
    visible: {
      y: 0, transition: { duration: 0.5 }
    },
  };

  const word10 = "HELLO@RITESH".split("");
  const word11 = "PANDEY.COM".split("");
  const word12 = "LINKEDIN".split("")
  const word13 = "INSTAGRAM".split("")
  const word14 = "GITHUB".split("")

  return (
    <div className='contact-page'>

      <motion.header
        initial={{ y: "-200%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ color: 'white' }}
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

      <div className='send-med-div'><h3 className='white-clor , send-me'>SEND  ME  A  MESSEGE</h3></div>

      <section className='email-sec2' >
        <div className='email-div2'>

          <motion.a
            href="/"
            className="nav-link15"
            variants={containerVariants5}
            initial="hidden"
            animate="visible"
            // viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word10.map((char, index) => (
              <motion.span key={index} variants={characterVariants5}>
                {char}
              </motion.span>
            ))}
          </motion.a>

          <motion.a
            href="/"
            className="nav-link14"
            variants={containerVariants5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word11.map((char, index) => (
              <motion.span key={index} variants={characterVariants5}>
                {char}
              </motion.span>
            ))}
          </motion.a>
        </div>

      </section>

      <div className='connect-div1'><h3 className='white-clor , send-me'>OR CONNET WITH</h3></div>
      <div className='connect-div2'><h3 className='white-clor , send-me'>ME ON SOCIALS</h3></div>

      <section className='contact-div-sec' >
        <div className='contact-div3'>

          <motion.a
            href="/"
            className="nav-link16"
            variants={containerVariants6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word12.map((char, index) => (
              <motion.span key={index} variants={characterVariants6}>
                {char}
              </motion.span>
            ))}
          </motion.a>

          <motion.a
            href="/"
            className="nav-link17"
            variants={containerVariants6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word13.map((char, index) => (
              <motion.span key={index} variants={characterVariants6}>
                {char}
              </motion.span>
            ))}
          </motion.a>

          <motion.a
            href="/"
            className="nav-link18"
            variants={containerVariants6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "inline-flex" }}
          >
            {word14.map((char, index) => (
              <motion.span key={index} variants={characterVariants6}>
                {char}
              </motion.span>
            ))}
          </motion.a>
        </div>

      </section>

    </div>
  )
}
