import React, { useEffect, useRef, useState } from 'react';
import { faEnvelope, faFaceSmile, faIdCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBloggerB, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContactContainer, ContactMe } from './StyledComponent';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';

function Contact() {
  const [contact, setContact] = useState(false);
  const contactRef = useRef();

  const contactOpen = () => {
    setContact(!contact);
  };
  
  gsap.registerPlugin(CSSPlugin);
  useEffect(() => {
    const contactAnimation = () => {
      gsap.from(contactRef.current, {
        y: -20
      });
      gsap.to(contactRef.current, {
        y: 0,
        duration: 0.5
      });
    };

    window.addEventListener('scroll', contactAnimation);

    return () => {
      window.removeEventListener('scroll', contactAnimation);
    };
  }, []);

  return (
    <div className="contact-wrap">
      <ContactContainer $contact={contact} ref={contactRef} className="contact-container">
        <button className='contact-btn' onClick={contactOpen}>
          <span className='text-bubble' data-text="Contact Me"></span>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faFaceSmile} />
          </span>
        </button>
        <ContactMe $contact={contact} className='contact-me'>
          <ul>
            <li>
              <a href="http://naver.me/xNmtk1AE" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faIdCard} /></span>
                CV
              </a>
            </li>
            <li>
              <a href="mailto:huiyeon7513@naver.com" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                Mail
              </a>
            </li>
            <li>
              <a href="https://github.com/yeon7513" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faGithub} /></span>
                Git
              </a>
            </li>
            <li>
              <a href="https://blog.naver.com/huiyeon7513" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faBloggerB} /></span>
                Blog
              </a>
            </li>
          </ul>
        </ContactMe>
      </ContactContainer>
    </div>
  )
};

export default Contact;
