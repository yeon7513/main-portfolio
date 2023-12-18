import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './scss/header.scss';

function LinkList({goto, children}){
  return (
    <li>
      <Link to={goto}>{children}</Link>
    </li>
  )
}

function Layout(){
  return(
    <>
      <header>
        <div className='inner'>
          <nav>
            <ul>
              <LinkList goto='/'>Home</LinkList>
              <LinkList goto='/about'>About</LinkList>
              <LinkList goto='/portfolio'>Portfolio</LinkList>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;