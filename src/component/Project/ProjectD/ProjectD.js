import React from 'react';
import './ProjectD.css'
const ProjectD = ({ info }) => {
     const {
         name,
         date,
         LiveSite,
         GitHub,
         image1,
         Technology,
         description1,
         description2,
         description3,
         description4,
     } = info
    return (
      <div className='containter '>
            <div className='projectsInfo shadow'>

                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-sm-6 col-12'>
                        <div className='crousel'>
                           
                                    <img
                                        className="d-block w-100"
                                        src={image1}
                                        alt="First slide"
                                    />
                               
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-6 col-sm-6 col-12'>
                        <div className='information'>
                            <h3>{name}</h3>
                            <p>{date}</p>
                            <ul className='description'>
                                <li>{description1}</li>
                                <li>{description2}</li>
                                <li>{description3}</li>
                                {
                                    description4 && <li>{description4}</li>
                                }
                            </ul>
                            
                        </div>
                    </div>
                    <div >
                                <div className='technology'>
                                    <h4>Technology:</h4>
                                    {
                                        Technology.map(tech => <p>{tech}</p>)
                                    }
                                </div>
                                <div className='link d-flex justify-content-center'>
                                    <div>
                                    <a href={LiveSite}>Live Preview</a>
                                    <a href={GitHub}>GitHub</a>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectD;