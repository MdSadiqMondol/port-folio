import React from 'react';
import Typical from 'react-typical'
import MyImage from '../../../image/me.jpg'
import './MainHeader.css'
const MainHeader = () => {
    return (
        <div className='mainheader'>
           <div className="container">
               <div className='row mt-5'>
                <div className='mt-5 col-md-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-sm-1 order-2  d-flex align-items-center justify-content-center'>
                    <div className='Intro '>
                        <h1>It's me<br />
                            <span >Md.Sadiq Mondol</span>
                        </h1>
                        <h3>
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                Delay ms={500}
                                steps={[
                                    'Junior-Web Developer',
                                    1000,
                                    'MERN Stack Developer',
                                    1000,
                                    'React Developer',
                                    1000,
                                    'Javascript Programmer',
                                    1000
                                ]}

                            />
                        </h3>
                        <p>
                            I am a junior WEB developer.
                            Currently I am working with React js.
                        </p>
                        
                        
                        <a href = 'https://drive.google.com/uc?export=download&id=1aPXyoImfJRapTjrLr3mvKTTYE87WEJtj' >
                        <button className='mainButton'>Resume</button>
                        </a>
                        
                    </div>
                </div>
                <div className='mt-5 col-md-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-sm-2 order-1   d-flex align-items-center justify-content-center'>
                    <div className='Image '>
                        <img src={MyImage} alt="img"></img>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default MainHeader;