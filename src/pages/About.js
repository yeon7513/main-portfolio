import React, { useEffect, useRef } from 'react';
import { Ability, AbilityPercent, Container, ContentTitle, Inner, Skill, Title } from '../components/StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import '../scss/about.scss';
import { faSignature, faCakeCandles, faHouseChimney, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import Contact from '../components/Contact';

const skills = [
  {
    no : 1,
    skill : 'HTML',
    ability : '80'
  },
  {
    no : 2,
    skill : 'CSS',
    ability : '80'
  },
  {
    no : 3,
    skill : 'Javascript',
    ability : '40'
  },
  {
    no : 4,
    skill : 'jQuery',
    ability : '50'
  },
  {
    no : 5,
    skill : 'mySQL',
    ability : '30'
  },
  {
    no : 6,
    skill : 'Photoshop',
    ability : '70'
  },
  {
    no : 7,
    skill : 'Illustrator',
    ability : '70'
  }

];

function About(){
  const leftTitle = useRef();
  const centerTitle = useRef();
  const rightTitle = useRef();

  const aboutTitle = useRef();
  const aboutText = useRef();
  const aboutMe = useRef();

  const abilityRefs = useRef([]);

  // full page scroll
  useEffect(() => {
    const section = document.querySelectorAll('section');
    const sec_length = section.length;
    const fullPage = window.innerWidth >= 1024;
    if(fullPage) {
      section.forEach(function(item, index){
        item.addEventListener('mousewheel', function(event){
          event.preventDefault();
          let delta = 0;
  
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
  
          let moveTop = window.scrollY;
          let selector = section[index];
  
          if (delta < 0){
            if (selector !== sec_length-1){
              try{
                moveTop = window.pageYOffset + selector.nextElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }
          else{
            if (selector !== 0){
              try{
                moveTop = window.pageYOffset + selector.previousElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }
          window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
        });
      });
    }
  }, []);
  
  
  useEffect(() => {
    const titleAnimation = () => {
      gsap.from(leftTitle.current, {
        x : -100,
        opacity : 0
      });
      gsap.to(leftTitle.current, {
        x : 0,
        duration: 2,
        opacity : 1,
        ease: "power3.out"
      });
      gsap.from(centerTitle.current, {
        opacity : 0
      });
      gsap.to(centerTitle.current, {
        duration: 2,
        opacity : 1
      });
      gsap.from(rightTitle.current, {
        x : 100,
        opacity : 0
      });
      gsap.to(rightTitle.current, {
        x : 0,
        duration: 2,
        opacity : 1,
        ease: "power3.out"
      });
    };

    const aboutAnimation = () => {
      gsap.from(aboutTitle.current, {
        y : -100,
        opacity : 0
      });
      gsap.to(aboutTitle.current, {
        y : 0,
        duration: 0.5,
        opacity : 1
      });
      gsap.from(aboutText.current, {
        opacity : 0
      });
      gsap.to(aboutText.current, {
        duration: 1,
        opacity : 1
      });
      gsap.from(aboutMe.current, {
        y : 100,
        opacity : 0
      });
      gsap.to(aboutMe.current, {
        y : 0,
        duration: 0.5,
        opacity : 1
      });
    };

    const abilityAnimation = () => {
      gsap.registerPlugin(CSSPlugin);
      skills.forEach((data, index) => {
        const abilityRef = document.querySelectorAll('.skillList')[index];
        gsap.from(abilityRef, {
          width: '0%'
        });
        gsap.to(abilityRef, {
          width: `${data.ability}%`,
          duration: 1
        });
      });
    };

    titleAnimation();
    aboutAnimation();
    abilityAnimation();

    window.addEventListener('scroll', titleAnimation);
    window.addEventListener('scroll', aboutAnimation);
    window.addEventListener('scroll', abilityAnimation);

    return () => {
      window.removeEventListener('scroll', titleAnimation);
      window.removeEventListener('scroll', aboutAnimation);
      window.removeEventListener('scroll', abilityAnimation);
    };

  }, []);

  return (
    <>
      <Container id='title'>
        <Inner>
          <div className='about-title'>
            <Title ref={leftTitle}>Let <span>me</span></Title>
            <Title ref={centerTitle}>introduce</Title>
            <Title ref={rightTitle}>myself.</Title>
          </div>
        </Inner>
      </Container>
      <Container id='about'>
        <Inner>
          <div className='about-me'>
            <ContentTitle ref={aboutTitle}>안녕하세요. 문희연입니다.</ContentTitle>
            <p ref={aboutText}>
              어려서부터 한 사회생활로 깨달은 중요한 점은
              <span><b>꾸준함</b>, <b>책임감</b>, <b>도전정신</b> 그리고 <b>열정</b>입니다.</span>
              저의 배움과 경험은 아직 <b>진행형</b>입니다.
            </p>
          </div>
          <div className='introduce' ref={aboutMe}>
            <div className="photo">
              <img src={process.env.PUBLIC_URL+'/images/huiyeon2.jpg'} alt="문희연 증명사진" />
            </div>
            <div className='information'>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faSignature} /></span>
                  <span>문희연</span>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faCakeCandles} /></span>
                  <span>1991. 11. 14.</span>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faHouseChimney} /></span>
                  <span>대전시 대덕구</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <a href="mailto:huiyeon7513@naver.com" target="_blank" rel="noopener noreferrer">Mail</a>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faIdCard} /></span>
                  <a href="http://naver.me/xhKQ6kYc" target="_blank" rel="noopener noreferrer">이력서</a>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faGithub} /></span>
                  <a href="https://github.com/yeon7513" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faBloggerB} /></span>
                  <a href="https://blog.naver.com/huiyeon7513" target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </Inner>
      </Container>
      <Container id='skills'>
        <Inner>
          <div className='skill'>
            <ContentTitle>Main Skills</ContentTitle>
            <table>
              <tbody>
                {skills.map((data) => {
                  return (
                    <tr key={data.no}>
                      <Skill>{data.skill}</Skill>
                      <Ability>
                        <AbilityPercent className='skillList' ref={abilityRefs} $ability={data.ability}>
                          {data.ability}%
                        </AbilityPercent>
                      </Ability>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="wise">
              <p className='wise-ko'>
              오늘의 지식은 내일의 힘이다.
                <span>- 프랜시스 베이컨</span>
              </p>
              <p className='wise-en'>
                Knowledge today is power tomorrow.
              </p>
            </div>
            <div className='skill-text'>
              <p>
                계속해서 <b>학습</b>하고 새로운 <b>경험</b>에서
                <span><b>배움</b>을 얻는 것은 <b>지적 성장</b>과</span>
                <span><b>인생의 풍요로움</b>을 위한 <b>중요한 가치</b>입니다.</span>
              </p>
            </div>
          </div>
        </Inner>
      <Contact />
      </Container>
    </>
  )
};

export default About;