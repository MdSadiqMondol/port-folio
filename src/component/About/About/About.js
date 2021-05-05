import React from 'react';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import MyImage from '../../../image/me.jpg'
import './About.css'
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
           <Navbar/>
            <div className=''>
                <div className='mt-5 d-flex justify-content-center bg-light'>
                    <div className='Information'>
                        <div className='aboutImage'>
                            <img src={MyImage} alt=''></img>
                        </div>
                        <div className='intro'>
                            <h1> Md. Sadiqur Rahman</h1>
                            <h4>MERN Stack Developer</h4>
                            <p>I am a technology enthusiast. I work on software development using JavaScript.
I am learning about JavaScript-based software development technology. I love to take on challenges and be part of the solution.</p>
                        </div>
                       

                    </div>
                </div>
                <div className='d-flex justify-content-center bg-light'>
                <div className='row mt-3 '>
                    <div className="col-md-6 col-sm-12 col-12">
                        <Skill></Skill>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <Education></Education>
                    </div>
                </div>
                </div>
            </div>
            <section style={{color:'black'}} className='bg-light'>
            <Footer/>
            </section>
        </div>
    );
};

export default About;