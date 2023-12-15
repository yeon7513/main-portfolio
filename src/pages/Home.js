import React, { useEffect, useRef } from 'react';
import '../scss/home.scss';
import { Container, ContentTitle, Inner, Title } from '../components/StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMobile, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const portfolioList = [
  {no : 1, url : '/portfolio/themeChange', subject : 'Theme Change!'},
  {no : 2, url : '/portfolio/top100List', subject : '100대 리스트'},
  {no : 3, url : '/portfolio/searchAPI', subject : '검색 API'},
  {no : 4, url : '/portfolio/matchingCard', subject : "Let's Match Cards!"},
  {no : 5, url : '/portfolio/myTodolist', subject : 'MY TODOLIST'},
  {no : 6, url : '/portfolio/movieApp', subject : '영화 검색 앱'},
  {no : 7, url : '/portfolio/_3MatchPuzzle', subject : '3Match Puzzle'},
  {no : 8, url : '/portfolio/teamProject', subject : '애플스토어 리뉴얼'},
]

function Home(){
  const leftTitle = useRef();
  const rightTitle = useRef();
  const myText = useRef();
  const contents = useRef();

  useEffect(() => {
    gsap.from(leftTitle.current, {
      x : -50,
      opacity : 0,
      delay : 1
    });
    gsap.to(leftTitle.current, {
      x : 0,
      duration: 0.8,
      ease: "power3.out",
      opacity : 1,
      delay : 1
    });
    gsap.from(rightTitle.current, {
      x : 50,
      opacity : 0,
      delay : 2
    });
    gsap.to(rightTitle.current, {
      x : 0,
      duration: 0.8,
      ease: "power3.out",
      opacity : 1,
      delay : 2
    });
    gsap.from(myText.current, {
      x : 0,
      opacity : 0,
      delay : 3
    });
    gsap.to(myText.current, {
      x : 0,
      duration: 0.8,
      opacity : 1,
      delay : 3
    });
    gsap.from(contents.current, {
      y : 50,
      opacity : 0,
      delay : 4
    });
    gsap.to(contents.current, {
      y : 0,
      duration: 0.8,
      opacity : 1,
      delay : 4
    });
  }, []);

  return (
    <Container>
      <Inner>
        <div className='intro'>
          <div className="intro-title">
            <Title className='hello' ref={leftTitle}>Hello</Title>
            <Title className='world' ref={rightTitle}>World!</Title>
          </div>
        </div>
        <div className="my-text" ref={myText}>
          <p>My name is <span>Mun Huiyeon</span></p>
          <p>and This is my <span>PORTFOLIO</span></p>
        </div>
        <div className="contents" ref={contents}>
          <div className="portfolio">
            <ContentTitle>portfolio</ContentTitle>
            <ul>
              {portfolioList.map((li) => {
                return (
                  <li key={li.no}>
                    <span>{li.no}</span>
                    <Link to={li.url}>{li.subject}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="contact">
            <ContentTitle>contact</ContentTitle>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faAt} />
                </span>
                <a href="mailto:huiyeon7513@naver.com" target="_blank" rel="noopener noreferrer">huiyeon7513@naver.com</a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMobile} />
                </span>
                <p>010-7557-0533</p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faNoteSticky} />
                </span>
                <p>
                <a href="https://blog.naver.com/huiyeon7513" target="_blank" rel="noopener noreferrer">MY BLOG</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <p>
                <a href="https://github.com/yeon7513" target="_blank" rel="noopener noreferrer">MY GitHub</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Inner>
    </Container>
  )
};

export default Home;