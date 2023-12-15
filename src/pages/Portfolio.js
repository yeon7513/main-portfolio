import React, { useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Inner, SolidBtn } from '../components/StyledComponent';
import { gsap } from 'gsap';
import '../scss/portfolio.scss';

function Portfolio(){
  const title = useRef();
  const container = useRef();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // gsap
  useEffect(() => {
    const portfolioAnimation = () => {
      gsap.from(title.current, {
        y: -50,
        opacity : 0
      });
      gsap.to(title.current, {
        y : 0,
        opacity : 1,
        duration : 1
      });
      gsap.from(container.current, {
        y : 50,
        opacity : 0,
      });
      gsap.to(container.current, {
        y : 0,
        opacity : 1,
        duration : 1
      });
    };

    portfolioAnimation();
  }, []);

  return (
    <Container>
      <Inner>
        <div className='portfolio-title' ref={title}>
          <h1>My works.</h1>
        </div>
        <Outlet />
        <div className='portfolio-grid' ref={container}>
          <div className='portfolio-item'>
            <div className='pf-title'>
              🎨 Theme Change!
            </div>
            <div className="btns">
              <PortfolioLink name={'themeChange'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              📃 100대 리스트
            </div>
            <div className="btns">
              <PortfolioLink name={'top100List'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513/Database-Input-And-Output' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              🔍 검색 API
            </div>
            <div className="btns">
              <PortfolioLink name={'searchAPI'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513/search-api-project' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              🃏 Let's Match Cards!
            </div>
            <div className="btns">
              <PortfolioLink name={'matchingCard'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513/macth-cards' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://tiny-monstera-fa6648.netlify.app/' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              📃 MY TODOLIST
            </div>
            <div className="btns">
              <PortfolioLink name={'myTodolist'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513/my-todolist' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://strong-cannoli-6db1d9.netlify.app/' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              🎥 영화 검색 앱
            </div>
            <div className="btns">
              <PortfolioLink name={'movieApp'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              🎮 3Match Puzzle
            </div>
            <div className="btns">
              <PortfolioLink name={'_3MatchPuzzle'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://github.com/yeon7513' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='pf-title'>
              <span>🤝🏻 [팀 프로젝트]</span>애플스토어
            </div>
            <div className="btns">
              <PortfolioLink name={'teamProject'} onClick={scrollTop} />
              <SolidBtn href='https://github.com/yeon7513/team-Project-Apple-Store-RENEWAL' target='_blank' className='link-btn'>Source</SolidBtn>
              <SolidBtn href='https://yeon7513.github.io/team-Project-Apple-Store-RENEWAL/' target='_blank' className='link-btn'>Demo</SolidBtn>
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  )
};

function PortfolioLink({ name, onClick }){
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }
  return (
    <>
      <NavLink to={`/portfolio/${name}`} className='preview' onClick={handleClick}>
        Preview 
      </NavLink>
    </>
  )
};

export default Portfolio;