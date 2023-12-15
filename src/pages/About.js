import React, { useEffect, useRef } from 'react';
import { Ability, AbilityPercent, Container, ContentTitle, Inner, Skill, Title } from '../components/StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import '../scss/about.scss';
import { faSignature, faCakeCandles, faHouseChimney, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';

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
            <Title ref={leftTitle}>Let me</Title>
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
              그렇게 네 아이들의 엄마가 되어서도 저의 도전정신과 열정은 멈추지 않고
              <span>비전공자이지만 새로운 분야에 도전하여 학습한 모든 것을</span>
              <span><b>내 것으로 만들기 위해 노력</b>했습니다.</span>
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
                <li>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <span>huiyeon7513@naver.com</span>
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
                많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.
                <span>- 벤자민 디즈라엘리</span>
              </p>
              <p className='wise-en'>
                Seeing much, suffering much, and studying much,
                <br />are the three pillars of learning.
              </p>
            </div>
            <div className='skill-text'>
              <p>이 명언처럼 풍부한 경험을 쌓고 어려움을 극복하며 끊임없이 학습하는 것은<br />
              저만의 <span>인생 다짐의 근간</span>이자 <span>지속적인 성장을 위한 결실</span>입니다.<br />
              이 세 가지를 통해 저는 더 나은 자아를 발견하고<br />
              세상과 더 깊이 소통하며 <span>지혜와 인내</span>를 길러가고자 다짐합니다.</p>
            </div>
          </div>
        </Inner>
      </Container>
    </>
  )
};

export default About;