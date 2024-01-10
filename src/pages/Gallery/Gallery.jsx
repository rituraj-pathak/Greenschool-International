import React from 'react'
import styles from "./Gallery.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ModalImage from "react-modal-image";

import galleryimg1 from "../../../public/assets/Gallery/01.jpg"
import galleryimg2 from "../../../public/assets/Gallery/02.jpg"
import galleryimg3 from "../../../public/assets/Gallery/03.jpg"

import galleryimg5 from "../../../public/assets/Gallery/05.jpg"
import galleryimg6 from "../../../public/assets/Gallery/06.jpg"
import galleryimg7 from "../../../public/assets/Gallery/07.jpg"
import galleryimg8 from "../../../public/assets/Gallery/08.jpg"
import galleryimg9 from "../../../public/assets/Gallery/09.jpg"
import galleryimg10 from "../../../public/assets/Gallery/10.jpg"


const Gallery = () => {
  return (
    <>
        <Navbar/>
        <Header title='Gallery'/>
        <div className={styles.gallery_images}>
            <h2>Gallery Images</h2>
            <div className={styles.gallery_images_container}>
            <ModalImage
            small={galleryimg1}
            large={galleryimg1}
            className={styles.gallery_image}/>
            <ModalImage
            small={galleryimg2}
            large={galleryimg3}
            className={styles.gallery_image}/>
            <ModalImage
            small={galleryimg3}
            large={galleryimg3}
            className={styles.gallery_image}/>
            <ModalImage
            small={galleryimg5}
            large={galleryimg5}
            className={styles.gallery_image}/>
            <ModalImage
            small={galleryimg6}
            large={galleryimg6}
            className={styles.gallery_image}/>
            <ModalImage
            small={galleryimg7}
            large={galleryimg7}
            className={styles.gallery_image}/>
              <ModalImage
            small={galleryimg8}
            large={galleryimg8}
            className={styles.gallery_image}/>
             <ModalImage
            small={galleryimg9}
            large={galleryimg9}
            className={styles.gallery_image}/>
             <ModalImage
            small={galleryimg10}
            large={galleryimg10}
            className={styles.gallery_image}/>
            </div>
        
        </div>
        <Footer/>
    </>
  )
}

export default Gallery