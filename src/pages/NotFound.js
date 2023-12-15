import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1, {replace : true});
  };
  const goHome = () => {
    navigate('/', {replace : true});
  };
  const goAbout = () => {
    navigate('/about', {replace : true});
  };
  const goPortfolio = () => {
    navigate('/portfolio', {replace : true});
  };

  return (
    <div className='page404-wrap'>
      <h1>Oops!😮</h1>
      <div className='inner'>
        <div className='page404'>
          <div className='page404-title'>
            <h2>4😖4 Error!</h2>
            <p>페이지를 찾을 수 없습니다.</p>
          </div>
          <div className='page404-link'>
            <p>걱정마세요. 다시 돌려보내드릴께요!</p>
            <ul>
              <li><button onClick={goBack}>뒤로가기</button></li>
              <li><button onClick={goHome}>Home</button></li>
              <li><button onClick={goAbout}>About</button></li>
              <li><button onClick={goPortfolio}>Portfolio</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
};

export default NotFound;