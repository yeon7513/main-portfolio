import React from 'react';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faDesktop, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

const item = {
  themeChange : {
    gif : 'tc',
    title : 'Theme Change!',
    description : `다크모드 및 여러 컬러 테마버튼을 넣어 버튼마다 테마가 변경됩니다.\nStyled Component와 Context API를 활용해 제작했습니다.`,
    date : '2023.11.10 - 2023.11.14',
    skill : 'React.js'
  },
  top100List : {
    gif : 'top',
    title : '100대 리스트',
    description : `mySQL에 데이터베이스를 생성해 100대 리스트 데이터의 입, 출력을 구현했습니다.\n* 현재는 소스에 게시된 sql파일로 데이터베이스를 생성하고, React에서 서버 연결 후 실행이 가능합니다.`,
    date : '2023.10.31 - 2023.11.03',
    skill : 'React.js, mySQL'
  },
  searchAPI : {
    gif : 'search',
    title : '검색 API',
    description : `네이버 검색 API를 활용해 여러 검색이 가능한 웹 페이지입니다.\n* 현재는 소스에 게시된 파일을 내려 받아 React에서 서버 연결 후 실행이 가능합니다.`,
    date : '2023.11.16 - 2023.11.17',
    skill : 'React.js'
  },
  matchingCard : {
    gif : 'card',
    title : "Let's Match Cards!",
    description : `5개의 스테이지로 이루어진 카드 짝 맞추기 게임입니다. \n 제한 시간 안에 모든 카드의 짝을 맞추면 스테이지가 클리어되고 다음 스테이지로 넘어갑니다. \n제한 시간이 끝나면 다시 도전할 수 있는 기회가 있습니다.`,
    date : '2023.11.27 - 2023.12.12',
    skill : 'React.js'
  },
  myTodolist : {
    gif : 'td',
    title : 'MY TODOLIST',
    description : `CRUD를 구현한 TODOLIST입니다.\n오늘과 내일 할 일의 관리가 가능합니다.\nTodoList 컴포넌트를 재활용해 동작과 레이아웃은 같지만, 안에 들어가는 데이터만 바뀌도록 제작했습니다.`,
    date : '2023.12.12 - 2023.12.14',
    skill : 'React.js'
  },
  movieApp : {
    /* gif : 'movie', */
    title : '영화 검색 앱',
    description : `영화 검색 앱입니다.\n* 제작 중 입니다.`,
    date : '2023.?? - 2023.??',
    skill : 'React.js'
  },
  _3MatchPuzzle : {
    /* gif : 'puzzle', */
    title : '3Match Puzzle',
    description : `3매치 퍼즐 게임입니다.\n* 제작 중입니다.`,
    date : '2023.11.?? - 2023.??',
    skill : 'React.js'
  },
  teamProject : {
    gif : 'team',
    title : '[TEAM] 애플스토어 리뉴얼',
    description : `팀 프로젝트로 애플스토어를 리뉴얼했습니다.\n남녀노소 누구나 손쉽게 접근하는 실용적인 페이지를 목표로 각자 구역을 맡아 디자인 및 제작했습니다.\n팀원분들과 고문분들의 도움으로 무사히 마무리된 프로젝트였습니다.`,
    date : '2023.10.10 - 2023.11.09',
    skill : 'HTML, CSS, javascript'
  }
};

function PortfolioItem() {
  const params = useParams();
  const myPF = item[params.name];

  return (
    <>
      {
        myPF ? (
          <div className='work'>
            <div className='work-contents'>
              <div className="glass-box">
                <h4>{myPF.title}</h4>
                <div className="work-text">
                  <p><FontAwesomeIcon icon={faDesktop} />프로젝트 개요</p>
                  <span>{myPF.description}</span>
                </div>
                <div className='work-text'>
                  <p><FontAwesomeIcon icon={faCalendarDays} />개발기간</p>
                  <span>{myPF.date}</span>
                </div>
                <div className="work-text">
                  <p><FontAwesomeIcon icon={faLightbulb} />사용 스킬</p>
                  <span>{myPF.skill}</span>
                </div>
              </div>
            </div>
            <div className='moniter'>
              <img src={process.env.PUBLIC_URL+'/images/moniter.png'} alt="" />
              <div className='gif'>
                {myPF.gif ? (
                  <img src={process.env.PUBLIC_URL+`/images/${myPF.gif}.gif`} alt="" />
                ) : (
                  <span>아직 제작 중입니다.... 😅</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>존재하지않는 포트폴리오 입니다..</p>
        )
      }
    </>
    
  )
};

export default PortfolioItem;