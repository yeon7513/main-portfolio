import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 130px;
  box-sizing: border-box;
  @media (min-width: 600px) and (max-width: 1023px) {
    padding-top: 80px;
  }
  @media (max-width: 599px) {
    padding-top: 100px;
  }
`

export const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
  @media (min-width: 600px) and (max-width: 1023px) {
    padding: 0 20px;
  }
  @media (max-width: 599px) {
    padding: 0 20px;
  }
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
`

export const ContentTitle = styled.h3`
  display: inline-block;
  padding: 5px 10px;
  font-size: 1.875rem;
  text-transform: uppercase;
  background-image: linear-gradient(rgba(235, 227, 214, 0) 0%, rgba(235, 227, 214, 0) 49%, rgba(235, 227, 214, 1) 50%, rgba(235, 227, 214, 1) 100%);
`

export const Skill = styled.td`
  width: 20%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #EBE3D5;
`

export const Ability = styled.td`
  width: 80%;
  height: 50px;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: #EBE3D5;
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
`

export const FullBtn = styled.a`
  padding: .4375rem .625rem;
  font-size: 14px;
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
  padding: .3125rem .625rem;
  font-size: 14px;
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
`