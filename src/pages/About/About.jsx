import React from 'react'
import styles from "./About.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


import aboutmissionimg from "../../../public/assets/About/about_mission.jpeg"
import aboutvissionimg from "../../../public/assets/About/about_vission.jpeg"
import dummyimg from "../../../public/assets//Home/homeabout.jpg"
import principalimg from "../../../public/assets/About/principal.jpg"
import drimg from "../../../public/assets//About/DrArora.jpg"
import drmamimg from "../../../public/assets/About/Drmam.jpg"
import meenalimg from "../../../public/assets/About/meenal_mam.jpg"
import amolimg from "../../../public/assets/About/amol_Sir.jpg"

import logo from "../../../public/assets/logo.png"

const About = () => {
  return (
    <>
        <Navbar/>
        <Header title="Our School"/>
        <div className={styles.aboutus}>
            <div className={styles.aboutus_head}>
                <h2>About us</h2>
            </div>
            <div className={styles.aboutus_content}>
                <div className={styles.aboutus_content_text}>
                <p>Founded in 2018, The Green School International is situated amid the enchanting green hills on the outskirts of the lovely city of Guwahati. The school's design is carefully crafted to blend seamlessly with the beauty of Mother Nature, aligning with the goal of sustainability.</p>
                <p>“School is a building which has four walls with tomorrow inside”– Lon Watters</p>
                </div>
                <div className={styles.aboutus_content_img}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.about_history}>
            <div className={styles.about_history_left}>
                <h2>Our School History</h2>             
            </div>
            <div className={styles.about_history_right}>
                <p>“We are not makers of History. We are made by History.”– Martin Luther King Jr. 

                At The Green School International, our educational philosophy is deeply influenced by this profound quote. 

In 2009, we embarked on a mission to establish a nationwide network of senior secondary schools. Our vision was clear – to provide quality education that not only imparts knowledge but also builds character. This vision led to the birth of The Green School International.

Founded in 2018 in Guwahati, The Green School International has rapidly grown to become one of the city's fastest-growing schools. With more than 500 students, our institution is making its presence felt in the educational landscape.

We are committed to a research-based approach , which creates a conducive learning environment, employs a child-centered curriculum, utilizes engaging teaching methods, and implements personalized assessment to make learning intriguing, involving, and motivating.

In Guwahati, The Green School International has carved a niche for itself among the city's finest educational institutions, offering an exceptional learning environment where history is not just learned but actively shaped by the bright minds of our students.</p>
            </div>
        </div>
        <div className={styles.about_mission}>
            <div className={styles.about_mission_img}>
                <img src={aboutmissionimg} alt="" />
            </div>
            <div className={styles.about_mission_text}>
                <p>Our Vision</p>
                <h3> Endeavor to hold the position of the most sought-after school in Guwahati.</h3>
            </div>
        </div>
        <div className={styles.about_vission}>
            <div className={styles.about_vission_img}>
                <img src={aboutvissionimg} alt="" />
            </div>
            <div className={styles.about_vission_text}>
                <p>Our Mission</p>
                <h3>Our mission is to empower children's growth by fostering physical vitality, nurturing creative intellects, and instilling a commitment to excellence in all their endeavors. Above all, our goal is to cultivate the happiness of every child.</h3>
            </div>
        </div>
        <div className={styles.about_values}>
            <img src={dummyimg} alt="" />
            <div className={styles.about_values_content}>
                <h3>OUR VALUES</h3>
                <p>
With a strong belief in the saying "values are caught and not taught," The Green School International introduces the Green School Sanskars among its students from the very early years with the objective to instill in them the right values and virtues. Based on the Core Values of Respect, Honesty, Cooperation, Compassion, Affection, Sharing, Perseverance, Self-Reliance, Patriotism, Unity, Care for the Environment, and Gratitude, the Green School students perform and participate in various activities every month where teachers explicitly teach the "Value of the Month" or Green School Sanskar of the Month.</p>
            </div>
        </div>
        <div className={styles.about_wordfromprincipal}>
            <div className={styles.about_wordfromprincipal_text}>
                <div>
                <h3>From the</h3>
                <h2>PRINCIPAL'S DESK</h2>
                </div>
                <p>At The Green School International, we strongly believe that every child is an uncut piece of diamond. They are the precious treasures of the future. As Albert Einstein said, "Education is not the learning of facts but the training of the mind to think." The school provides a plethora of opportunities for the holistic development of every Green School student. Children are provided an open platform wherein we help them nurture their different skills with love, compassion, and affection. Dr. Daisaku Ikeda, a Japanese Buddhist philosopher, educator, and author, says, "When we treat children with respect, they, in turn, learn how to respect other human beings." It is a testimony to the vision of our founders, the dedication of our facilitators, and the involvement of our parents, that within a short span of time, we could make our presence felt in society.

Our innovative teaching methodologies encourage Green School students to develop their critical and logical thinking. Every child is unique, and their creativity can stretch to yet unknown horizons. Our mission is to facilitate a world in which every child will sparkle, filled with hope, determination, courage, and conviction. Thank you for believing in us, and we promise to raise every Green School student as a rock-solid global citizen of society.</p>
            <div className={styles.about_signature}>
                <h3>MOUSUMI GANGULY</h3>
                <p>- Principal</p>
            </div>
            </div>
            <div className={styles.about_principal_img}>
                <img src={principalimg} alt="" />
            </div>
        </div>
       

        <Footer/>
    </>
  )
}

export default About