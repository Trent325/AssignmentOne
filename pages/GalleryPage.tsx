import type { NextPage } from 'next' //need it 
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; //imports global styles from this can be used to set one font for the entire site or something like that 
import Header from "../components/header";
import HomePageIntro from '../components/homepage';
import Footer from "../components/footer";
import Gallery from "../components/Gallery";
import ImageTitle from "../components/Image Title block ";


const GalleryPage: NextPage = () => { //creates the object
  return ( //returns the following 
    <div> 
      <Header/>
      <ImageTitle/>
      <Gallery/>
      <Footer/>
      
    </div>
  )
}

export default GalleryPage; //use this name as the https://DomainName/GalleryPage
