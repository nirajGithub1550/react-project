import React from 'react'
import Layout from '../components/layouts/Layout'
import Banner from '../img/banner.jpeg'
import {Link} from 'react-router-dom'
import '../styles/header.css';
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='homeContainer'>
        <h1>Food Website</h1> 

        
         <p>Best food in Delhi</p>
         <Link to="/menu">
            <button>ORDER NOW</button>
         </Link>
        </div>
         
      </div>
    </Layout>
  )
}

export default Home
