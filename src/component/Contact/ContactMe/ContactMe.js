import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../Contact';

const ContactMe = () => {
    return (
       <div className='bg-light'>
            <Navbar></Navbar>
          
          <section style={{color:'black'}} className='bg-light p-5'>
          <Contact></Contact>
            <Footer color={'#000000'}></Footer>
            </section>
        </div>
    );
};

export default ContactMe;