import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 298px;
  height: 197px;
  border-radius: 10px;
  border: 2px solid;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  text-decoration: none;
  overflow: hidden;
  color: white;
  cursor: pointer;
  opacity: .9;
  
  position: relative;
  display: flex;
  flex: 0 0 298px;
  align-items: flex-end;
  transition: width .3s;
  &:hover,
  &:focus {
    width: calc(298px + 6vw);
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  & > span {
    width: 100%;
    height: 45%;
    background-color: rgba(0,0,0,0.8);
    padding: 15px;
    font-weight: bold;
    font-size: 15px;
    display: none;
  }
`;