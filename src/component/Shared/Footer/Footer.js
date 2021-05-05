import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = ({color}) => {
    return (
        <section className='footer'>
                <p>Copyright © Md. Sadiqur Rahman  All Rights Reserved</p>
                <div >
                    <a a target = '_blank'
                    rel = "noreferrer"
                    href = 'https://www.facebook.com/md.sadiqur.rahmanmondol.9/' >
                    <FontAwesomeIcon className='icon' icon={faFacebook} size='2x' color={color}/>
                    </a>
                    <a a target = '_blank'
                    rel = "noreferrer"
                    href = 'https://www.mdsadiqurrahmanb@gmail.com' >
                    <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' color={color}/>
                    </a>
                    <a a target = '_blank'
                    rel = "noreferrer"
                    href = 'https://github.com/MdSadiqMondol' >
                    <FontAwesomeIcon className='icon' icon={faGithub} size='2x' color={color}/>
                    </a>
                    <a a target = '_blank'
                    rel = "noreferrer"
                    href = 'https://www.linkedin.com/in/md-sadiq-398213211/' >
                    <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' color={color}/>
                    </a>

                </div>
        </section>
    );
};

export default Footer;