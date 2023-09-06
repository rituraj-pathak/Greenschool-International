import React from 'react'
import styles from './Footer.module.css'
import logo from "../../assets/logo.png"
import {MdLocationOn} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.footer_container}>
            <div className={styles.footer_about}>
                <h3>About us</h3>
                <p>Nestled amidst the picturesque green hills in the suburbs of the beautiful city of Guwahati, The Green School International has been thoughtfully designed to harmonize with the splendors of Mother Nature...</p>
            </div>
            <div className={styles.footer_links}>
                <h3>Quick Links</h3>
                <ul>
                <li> <Link to={'/'} className={styles.footer_navlink}>Home</Link></li>
                <li> <Link to={'/about'} className={styles.footer_navlink}>Our School</Link></li>
                <li><Link to={'/publicdisclosure'} className={styles.footer_navlink} >Public Disclosure</Link></li>
                <li><Link to={'/admission'} className={styles.footer_navlink}>Admissions</Link></li>
                <li><Link to={'/gallery'} className={styles.footer_navlink}>Gallery</Link></li>
                <li><Link to={'/contact'} className={styles.footer_navlink}>Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles.footer_contacts}>
                <h3>Contact</h3>
                <div className={styles.footer_contact}>
                    <MdLocationOn color='yellow' size={20} />
                    <p>Mahapurush Madhabdev PathI, Nalapara, Sarusajai</p>
                </div>
                <div className={styles.footer_contact}>
                    <AiFillPhone color='yellow'/>
                    <p>+91 9387130617</p>
                </div>
                <div className={styles.footer_contact}>
                    <BsFillEnvelopeFill color='yellow'/>
                    <p>guwahati@greenschoolinternational.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer