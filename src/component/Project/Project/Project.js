import React from 'react';
import './Project.css'
import Affaction from '../../../image/affection travel.png'
import Mobile from '../../../image/mobile store.png'
import ProjectD from '../ProjectD/ProjectD';


const ProjectInfo = [{
        name: 'Afection travel',
        date: 'March 2021',
        image1: Affaction,
        description1: 'This is a Complete Responsive Website. Users will be able to order travel pakeges',
        description2: 'Users need to log in to the website to place an order',
        description3: 'Users of this website can give reviews if their order is completed',
        description4: 'Website admin can add new services if they want',
        LiveSite: ' https://affection-travel.web.app/',
        GitHub: 'https://github.com/Porgramming-Hero-web-course/complete-website-client-MdSadiqMondol',
        Technology: ["React js", "Hook Form", "Node.js", "Express.js", "MongoDB", "firebase", "Heroku", "Bootstrap", "CSS", "HTML"]
    },
    {
        name: 'MOBILE STORE',
        date: 'April 2021',
        image1: Mobile,
        description1: 'It is a responsive React Web app',
        description2: 'it is a mobile store Website. You can order new mobiles',
        description3: 'Website Control By Admin Panel',
        description4: 'Website admin can add new mobile and delete any type of mobile from this website',
        LiveSite: 'https://burj-al-arab-a1194.web.app/',
        GitHub: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-MdSadiqMondol ',
        Technology: ["HTML", "CSS ", "React.js", "Bootstrap", "React Hook Form", "firebase", "Node.js", "Express.js", "MongoDB"]
    }
]

const Project = () => {
    return (
        <div className='d-flex justify-content-center'>
        <div className='project'>
            <h2>My Projects</h2>
            {
                ProjectInfo.map(info=><ProjectD info={info}></ProjectD>)
            }
        </div>
        </div>
    );
};

export default Project;