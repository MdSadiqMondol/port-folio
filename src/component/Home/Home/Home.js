import React from 'react';
import Header from '../Header/Header';
import Project from '../../Project/Project/Project'
import Blog from '../../Blog/Blog'
import Footer from '../../Shared/Footer/Footer'


import './Home.css'
import Contact from '../../Contact/Contact';


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <section className='projectSection'>
                <Project></Project>
                <a target ='_blank' href='/portfolio'>
                <button className='btn btn-primary homebutton'>More Project</button>
                </a>
                </section>
                <section className='contract'>
                <Contact></Contact>
                </section>
                <section className='footerInHome'>
                <Footer color={'#000000'}></Footer>
                </section>
        </div>
    );
};

export default Home;