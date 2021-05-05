import React from 'react';
import './Edu.css'
const Education = () => {
    return (
     <div className='educations d-flex justify-content-end'>
            <div>
            <h2>Education</h2>
            <div className='education'>
                
                <h3>BSc in physics</h3> 
                <p>Jahangirnagar University </p>
                <p><small>Saver,Dhaka</small></p>
            </div>
            <h2>Course</h2>
            <div className='course'>
                <h3>Web Development</h3>
                <p>Complete Web Development Course By Programming Hero</p>
                <p>01-01-2021 to present</p>
            </div>
            </div>
        </div>
    );
};

export default Education;