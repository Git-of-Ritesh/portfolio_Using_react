import { React, useRef, useEffect } from 'react'
import { animate, easeIn, motion, useScroll, useTransform } from "framer-motion"
import './Home.css'
import company from './images/company.jpg'
import recipe from './images/recipe.jpg'
import tennis from './images/TableTennis.jpg'




export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const characterVariants = {
        hidden: { y: 200 },
        visible: {
            y: 0, transition: { duration: 0.5 }
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.5 }
        },
    };

    const word = "LANDING".split("");
    const word2 = "SITE".split("");
    const word3 = "RECIPE".split("");
    const word4 = "FINDER".split("");
    const text = "TABLE TENNIS,".split("");
    const text2 = "GAMING,".split("");
    const text3 = "MUSIC.".split("");
    const word5 = "HELLO@RITESH".split("");
    const word6 = "PANDEY.COM".split("");



    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const ym = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const nm = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section className='home-section'>

            <motion.header
            initial={{y: "-200%"}}
            animate={{y: "0%"}}
            transition={{duration: 0.5, delay: 3}}
            
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

            <div className='hero1'>
                <div className='words'>

                    <span className='word-link'><h1>C</h1></span>
                    <span className='word-link'><h1>R</h1></span>
                    <span className='word-link'><h1>E</h1></span>
                    <span className='word-link'><h1>A</h1></span>
                    <span className='word-link'><h1>T</h1></span>
                    <span className='word-link'><h1>I</h1></span>
                    <span className='word-link'><h1>V</h1></span>
                    <span className='word-link'><h1>E</h1></span>
                </div>

                <div className='words'>

                    <span className='word-link'><h1>D</h1></span>
                    <span className='word-link'><h1>E</h1></span>
                    <span className='word-link'><h1>V</h1></span>
                    <span className='word-link'><h1>E</h1></span>
                    <span className='word-link'><h1>L</h1></span>
                    <span className='word-link'><h1>O</h1></span>
                    <span className='word-link'><h1>P</h1></span>
                    <span className='word-link'><h1>E</h1></span>
                    <span className='word-link'><h1>R</h1></span>
                </div>

            </div>

            <div className='hero-container'>
                <div className='hero2'></div>
            </div>



            <div className='hero3'>

                <div className='arrowdown'>
                    <span className='word-link-arrow'><i class="fa-solid fa-arrow-down-long fa-6x"></i></span>
                </div>
                <div className='words1'>
                    <h4 className='word-link'>YOUR CREATIVE </h4>
                    <h4 className='word-link'>PARTNER IN DESIGN</h4>
                    <h4 className='word-link'>AND DEVELOPMENT</h4>
                </div>



                <div className='hero-item2'>
                    <div className='words'>

                        <span className='word-link'><h1>R</h1></span>
                        <span className='word-link'><h1>I</h1></span>
                        <span className='word-link'><h1>T</h1></span>
                        <span className='word-link'><h1>E</h1></span>
                        <span className='word-link'><h1>S</h1></span>
                        <span className='word-link'><h1>H</h1></span>

                    </div>

                    <div className='words'>

                        <span className='word-link'><h1>K</h1></span>
                        <span className='word-link'><h1>R</h1></span>
                        <span className='word-link'><h1>.</h1></span>
                        <span className='word-link'><h1>P</h1></span>
                        <span className='word-link'><h1>A</h1></span>
                        <span className='word-link'><h1>N</h1></span>
                        <span className='word-link'><h1>D</h1></span>
                        <span className='word-link'><h1>E</h1></span>
                        <span className='word-link'><h1>Y</h1></span>

                    </div>

                </div>
            </div>


            <div className='info'>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: "inline-flex" }}
                    className='Sno'>
                    <motion.h4
                        variants={characterVariants}
                    >01/</motion.h4>
                </motion.div>

                <div className='info2'>
                    <div className='p1'>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'>
                            <motion.p
                                variants={characterVariants}
                            >I'M PASSIONATE ABOUT BUILDING WEBSITES</motion.p>
                        </motion.div>



                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >THAT ARE BOTH CREATIVE AND EASY TO USE.</motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >MY GOAL IS TO MAKE EVERY INTERACTION</motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >ENJOYABLE AND MEMORABLE</motion.p>
                        </motion.div>

                    </div>

                    <div className='p2'>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >WHEN I'M NOT CODING OR DESIGNING,</motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >USUALLY PLAYING GAMES OR LIFTING WEIGHTS</motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            style={{ display: "inline-flex" }}
                            className='overflow'
                        >
                            <motion.p
                                variants={characterVariants}
                            >AT THE GYM</motion.p>
                        </motion.div>

                    </div>
                </div>

            </div>

            <section className='home-section2'>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, stiffness: 60, opacity: { duration: 0.4 }, ease: easeIn, duration: 0.5 }}
                    className='section2-part1'>
                    <p className='n1'>A blend of UI and Software engineering.</p>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, stiffness: 60, opacity: { duration: 0.4 }, ease: easeIn, duration: 0.5 }}
                    className='section2-part2'>
                    <p>As an experienced web designer and developer, I blend creativity with technical expertise to craft visually stunning and highly functional websites. My deep understanding of both design principles and development languages allows me to bridge the gap between aesthetics and usability, ensuring that every project I work on is both beautiful and effective.</p>
                    <p>With proficiency in multiple programming languages, including HTML, CSS, JavaScript, and others, I bring a versatile approach to web development.</p>
                    <a href="/about" className='nav-link6'>More abut me and works</a>
                </motion.div>

            </section>


            <section ref={container} className='home-scroll-sec'>

                <section className='home-part2'>

                    <div className='home-part2-title'>
                        <motion.h4
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            className='flex-strt'>02/</motion.h4>

                        <motion.h4
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            className='wdth'>RECENT PROJECTS</motion.h4>

                        <motion.h4
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            className='wdth2'>CREATIVE DEVELOPMENT</motion.h4>
                    </div>

                    <div ref={container} className='prjct'>

                        <div className='nme-prjct'>

                            <motion.a
                                href="/"
                                className="nav-link7"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: "inline-flex" }}
                            >
                                {word.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.a>

                            <motion.a
                                href="/"
                                className="nav-link8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: "inline-flex" }}
                            >
                                {word2.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.a>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: "inline-block" }}

                                className='detail-prjct'>
                                <h4>A WEBSITE FOR A COMPANY, FRONTEND WORK</h4>
                            </motion.div>
                        </div>

                        <div className='prjct-img'>
                            <motion.img style={{ y: sm }} className='prjct-img-size' src={company} alt="" />
                        </div>

                    </div>


                    <div className='prjct'>

                        <div className='nme-prjct'>

                            <motion.a
                                href="/"
                                className="nav-link9"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: "inline-flex" }}
                            >
                                {word3.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.a>

                            <motion.a
                                href="/"
                                className="nav-link10"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: "inline-flex" }}
                            >
                                {word4.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.a>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: "inline-block" }}
                                className='detail-prjct'>
                                <h4>RECIPE FINDER WEB APP, SEARCH BY COMPONENTS</h4>
                            </motion.div>
                        </div>

                        <div className='prjct-img2'>
                            <motion.img style={{ y: ym }} className='prjct-img-size' src={recipe} alt="" />
                        </div>

                    </div>

                </section>

                <section className='home-sec3'>

                    <div>
                        <motion.h4
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            className='flex-strt'>03/</motion.h4>
                    </div>

                    <div className='sec3-prat2'>

                        <div className='sec3-p2'>

                            <motion.h1
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ display: "inline-flex", overflow: "hidden" }}
                            >
                                {text.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}

                            </motion.h1>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ display: "inline-block", overflow: "hidden" }}
                                transition={{ duration: 0.8, easeIn }}

                                className='tt-img'>
                                <motion.img

                                    style={{ y: nm }} className='sec3-prat2-img' src={tennis} alt="" />
                            </motion.div>

                            <motion.h1
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ display: "inline-flex", overflow: "hidden" }}
                            >
                                {text2.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}

                            </motion.h1>

                            <motion.h1
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ display: "inline-flex", overflow: "hidden" }}
                            >
                                {text3.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char}
                                    </motion.span>
                                ))}

                            </motion.h1>
                        </div>

                        <div className='sec3-prat2-detail' >
                            <h4>In my leisure time, I'm either honing my table tennis skills, exploring immersive gaming experiences, or getting lost in a playlist of my favorite music.</h4>
                            <a href="/"><h4 className='nav-link11'>More about me</h4></a>
                        </div>

                    </div>

                    <div>
                        <motion.h4
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                        >ABOUT ME</motion.h4>
                    </div>

                </section>

            </section>

            <section className='home-sec-4'>

                <div>
                    <motion.h4
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='flex-strt'>03/</motion.h4>
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

            <section className='email-sec' >
                <div className='email-div'>

                    <motion.a
                        href="/"
                        className="nav-link12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: "inline-flex" }}
                    >
                        {word5.map((char, index) => (
                            <motion.span key={index} variants={characterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.a>

                    <motion.a
                        href="/"
                        className="nav-link13"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: "inline-flex" }}
                    >
                        {word6.map((char, index) => (
                            <motion.span key={index} variants={characterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.a>
                </div>

            </section>

            <motion.div className='slidein'
            initial={{y: "100%"}} 
            animate={{ y: ["100%", "0%", "0%", "100%"] }} 
            transition={{duration: 2,  times: [0, 0.3, 0.7, 1],ease: [0.6, 0.8, 0.2, 1]}}
            />
        </section>
    )
}




