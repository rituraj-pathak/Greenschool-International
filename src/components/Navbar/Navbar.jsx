import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import logo from "../../../public/assets//logo.png"
import { Link } from 'react-router-dom'
import {HiOutlineMenuAlt1} from 'react-icons/hi'


const Navbar = () => {
    const [navdropOpen, setNavdropOpen] = useState(false);

    const navdropOpenHandler = () => {
        if(navdropOpen){
            setNavdropOpen(false)
        }
        else{
            setNavdropOpen(true)
        }
    }
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <img src={logo} alt="" />
            <h5 style={{textTransform:'uppercase'}}>Senior Secondary School</h5>
        </div>
        <div className={styles.navbar_navlinks}>
            <ul>
                <li>
                    <Link to={'/'} className={styles.navbar_navlink}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'} className={styles.navbar_navlink}>Our School</Link>
                </li>
                <li>
                    <Link to={'/publicdisclosure'} className={styles.navbar_navlink} >Public Disclosure</Link>
                </li>
                <li>
                    <Link to={'/admission'} className={styles.navbar_navlink}>Admissions</Link>
                </li>
                <li>
                    <Link to={'/gallery'} className={styles.navbar_navlink}>Gallery</Link>
                </li>
                <li>
                    <Link to={'/contact'} className={styles.navbar_navlink}>Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className={styles.menu_btn_container}>
            <button className={styles.menu_btn} onClick={navdropOpenHandler}>
                <HiOutlineMenuAlt1 size={35}/>
            </button>
        </div>
     
    </div>
    <div className={styles.navbar_drop} style={{display : navdropOpen? 'block':'none'}}>
        <ul>
            <li> <Link to={'/'} className={styles.navbar_navlink}>Home</Link></li>
            <li> <Link to={'/about'} className={styles.navbar_navlink}>Our School</Link></li>
            <li><Link to={'/publicdisclosure'} className={styles.navbar_navlink} >Public Disclosure</Link></li>
            <li><Link to={'/admission'} className={styles.navbar_navlink}>Admissions</Link></li>
            <li><Link to={'/gallery'} className={styles.navbar_navlink}>Gallery</Link></li>
            <li><Link to={'/contact'} className={styles.navbar_navlink}>Contact Us</Link></li>

        </ul>
    </div>
    </>
  )
}

export default Navbar