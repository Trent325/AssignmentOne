import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header";
import HomePageIntro from '../components/homepage';
import Footer from "../components/footer";


const Home: NextPage = () => {
  return (
    <div> 
      <Header/>
      <HomePageIntro/>
      <Footer/>
    </div>
  )
}

export default Home;
