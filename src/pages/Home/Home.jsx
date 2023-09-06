import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Home.module.css"
import homebannerimg from "../../assets/Home/dummy_banner_student.png"
import homebannerstdimg from "../../assets/home/banner_student.png"

import mathicon from "../../assets/icons/math.png"
import homeaboutimg from "../../assets/Home/homeabout.jpg"
import Footer from '../../components/Footer/Footer'
import discoverimg from "../../assets/Home/discoverimg.jpeg"
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import icon1 from "../../assets/icons/icon 1.svg"
import icon2 from "../../assets/icons/icon 2.svg"
import icon3 from "../../assets/icons/icon 3.svg"
import icon4 from "../../assets/icons/icon 4.svg"
import icon5 from "../../assets/icons/icon 5.svg"
import icon6 from "../../assets/icons/icon 6.svg"



const Home = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.home_banner}>
          <div className={styles.home_banner_left}>
            <h2><span>For Every Student,</span><span>Every Classroom.</span> </h2>
            <p>Transforming Lives Through Education: Inspiring Growth, Fostering Excellence, and Building a Brighter Tomorrow</p>
          </div>
          <div className={styles.home_banner_right}>
            <img src={homebannerstdimg} alt="" />
          </div>
        </div>
       
        <div className={styles.home_discovery}>
          <div className={styles.home_discovery_left}>
            <p>Discover life at</p>
            <h2><span>The Green</span><span>School</span><span>International,</span><span>Guwahati</span></h2>
          </div>
          <div className={styles.home_discovery_right}>
          <img src={discoverimg} alt="" />
          </div>
        </div>
        {/* ************ABOUT******************* */}
        <div className={styles.home_about}>
         
          <div className={styles.home_about_container}>
            <div className={styles.home_about_text}>
              <h2>About us</h2>
              <p>Nestled amidst the picturesque green hills in the suburbs of the beautiful city of Guwahati, The Green School International has been thoughtfully designed to harmonize with the splendors of Mother Nature. The school offers an array of modern amenities, including a football pitch, volleyball ground, tennis court, separate swimming pools for junior and senior students, a skating area, and well-equipped classrooms.... </p>
              <Link to='/about'><Button/></Link>
            </div>
            <div className={styles.home_about_img}>
              <img src={homeaboutimg} alt="" />
            </div>
          </div>
        </div>
        {/* ************ABOUT END ************** */}
        <div className={styles.home_highlights}>
          <h2>Highlights</h2>
          <div className={styles.highlights_cards}>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon1} alt="" />
                <h4>Ganit</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p>It is a pedagogic model that aids in learning Maths thereby meeting the needs of middle and high-school students. We incorporate proven problem-solving strategies and heuristics. </p>
              </div>
            </div>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon2} alt="" />
                <h4>Yoga</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p>At The Green school international, we emphasize the importance of yoga to build strength, endurance, and awareness by maintaining harmony between the body and the mind. </p>
              </div>
            </div>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon3} alt="" />
                <h4>Infrastructure</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p> We provide a conducive space for learning with amenities to fulfil the needs of an optimum learning environment.</p>
              </div>
            </div>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon4} alt="" />
                <h4>Sport</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p>
Incorporating sports into traditional education cultivates children's passion and skills, while also enhancing their stamina and overall health. This holistic approach ensures a well-rounded development beyond the classroom. </p>
              </div>
            </div>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon5} alt="" />
                <h4>Homework</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p> We help strike a balance between the lesson learnt at school and the work to be carried at home for revisiting the lessons.</p>
              </div>
            </div>
            <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={icon6} alt="" />
                <h4>Math Olympiad</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p>It is a highly motivated and thought-provoking exam for budding talents that help them make a mark for themselves in the field of Maths.</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className={styles.home_counter_container}>
        <div className={styles.home_counter}>
          <div className={styles.home_counter_group}>
          <div className={styles.home_counter_item}>
            <h2>45+</h2>
            <p>Number of teachers</p>
          </div>
          <div className={styles.home_counter_item}>
            <h2>200+</h2>
            <p>Future-Ready Alumni</p>
          </div>
          </div>
          <div className={styles.home_counter_group} >
            <div className={styles.home_counter_item}>
              <h2>5+</h2>
              <p>Years of Educational Experience</p>
            </div>
            <div className={styles.home_counter_item}>
              <h2>550+</h2>
              <p>Happy Parents</p>
            </div>
          </div>

        </div>
        </div>

        <Footer/>
        
    </>
  )
}

export default Home