import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding-top: 130px;
  box-sizing: border-box;
  outline: 1px dotted red;
  &.portfolio-wrap {
    height: 100%;
  }
  @media (min-width: 600px) and (max-width: 1023px) {
    display: flex;
    align-items: center;
    padding: 80px 100px;
    &.portfolio-wrap {
      padding: 80px 100px 50px;
    }
  }
  @media (max-width: 599px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    padding-top: 0;
    &.portfolio-wrap {
      display: block;
      padding: 80px 50px 50px;

    }
  }
`

export const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
`

export const Title = styled.h2`
  font-size: 12.5rem;
  &.hello {
    position: absolute;
    top: 0; left: 4.1875rem;
  }
  &.world {
    position: absolute;
    bottom: 0; right: 4.1875rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
  }
  @media (min-width: 600px) and (max-width: 1023px) {
    font-size: 120px;
    &.hello {
      top: 0; left: 0;
    }
    &.world {
      bottom: 0; right: 0;
    }
  }
  @media (max-width: 599px) {
    font-size: 90px;
    &.hello {
      top: 0; left: 0;
    }
    &.world {
      bottom: 0; right: 0;
      font-size: 85px;
    }
  }
`

export const ContentTitle = styled.h3`
  display: inline-block;
  padding: 5px 10px;
  font-size: 1.875rem;
  text-transform: uppercase;
  background-image: linear-gradient(rgba(235, 227, 214, 0) 0%, rgba(235, 227, 214, 0) 49%, rgba(235, 227, 214, 1) 50%, rgba(235, 227, 214, 1) 100%);
  
  @media (min-width: 600px) and (max-width: 1023px) {
    font-size: 20px;
  }
  
  @media (max-width: 599px) {
    font-size: 18px;
  }
`

export const Skill = styled.td`
  width: 20%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #EBE3D5;
  @media (min-width: 600px) and (max-width: 1023px) {
  }
  @media (max-width: 599px) {
    padding: 0 15px;
    height: 35px;
  }
`

export const Ability = styled.td`
  width: 80%;
  height: 50px;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: #EBE3D5;
  @media (min-width: 600px) and (max-width: 1023px) {
  }
  @media (max-width: 599px) {
    padding: 5px 0;
    height: 35px;
  }
`

export const AbilityPercent = styled.span`
  display: flex;
  justify-content: right;
  align-items: center;
  width: ${props => props.$ability}%;
  padding: 3px 0;
  padding-right: 15px;
  text-align: right;
  font-size: 14px;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
  background-color: #776B5D;
  color: #fff;
  @media (min-width: 600px) and (max-width: 1023px) {
  }
  @media (max-width: 599px) {
    padding: 1px 0;
    padding-right: 5px;
    font-size: 10px;
  }
`

export const FullBtn = styled.a`
  padding: .4375rem .625rem;
  font-size: .875rem;
  border: none;
  outline: none;
  border-radius: .625rem;
  background-color: #B0A695;
  transition: all .5s;
  &:hover {
    background-color: #776B5D;
    color: #fff;
  }
  `

export const SolidBtn = styled.a`
  padding: .3125rem;
  font-size: .875rem;
  font-weight: bold;
  border: 2px solid #B0A695;
  outline: none;
  border-radius: .625rem;
  background-color: transparent;
  color: #B0A695;
  transition: all .5s;
  &:hover {
    border: 2px solid #776B5D;
    color: #776B5D;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    padding: 8px;
  }
  @media (max-width: 599px) {
    padding: 8px;
  }
`

export const ContactContainer = styled.div`
  position: fixed;
  bottom: ${props => (props.$contact ? '1.25rem' : '6.25rem')}; right: 5px;
  width: 5.8125rem;
  height: ${props => (props.$contact ? '11.875rem' : 0)};
  padding: ${props => (props.$contact ? '.625rem 0' : 0)};
  border-radius: .625rem;
  background-color: rgba(255,255,255,0.5);
  text-align: center;
  transition: all .5s;
  @media (min-width: 600px) and (max-width: 1023px) {

  }
  @media (max-width: 599px) {
    bottom: ${props => (props.$contact ? '20px' : '60px')}; right: 0;
  }
`

export const ContactMe = styled.div`
  position: absolute;
  top: 0; left: 50%;
  padding-top: 4.6875rem;
  transform: translateX(-50%);
  
  ul {
    opacity: ${props => (props.$contact ? 1 : 0)};
    transition: .5s;
  }
`