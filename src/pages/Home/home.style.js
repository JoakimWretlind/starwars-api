import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InnerHome = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    max-width: 156rem;
    display: grid;
    grid-template-columns: 4% 92% 4%;
`;
/** Columns **/
export const Video = styled.video`
    width: 300%;
    margin: auto;
    margin-left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 541px){
        width: 70%;        
    }
`

export const LeftPane = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightPane = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
`;

/** Overlay - lies over the columns for styling purpose **/
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
   // background: rgba(0,0,0,.3);
    background: radial-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8));
    z-index: 2;
    @media screen and (min-width: 541px){
        padding: 3rem 0;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -10vh 0;
`;

/** ButtonSection **/
export const ButtonContainer = styled.div`    
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 541px){
        margin-top: -10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

/** Fonts **/
export const MainHeader = styled.h1`
    font-family: 'starjedi';
    font-size: clamp(3rem, 24vw, 16rem);
    line-height: .9;
    text-align: center;
    margin: 10vh 0 0;
    @media screen and (min-width: 541px){
        line-height: 1.15;
        margin-bottom: 0;
    }
`;

/** Links **/
export const CharachtersLink = styled(Link)`
    color: ${props => props.theme.white};
    border: .1rem solid white;
    border-top: none;
    border-left: none;
    font-size: clamp(1.6rem, 4vw,2rem);
    text-transform: uppercase;
    letter-spacing: .2rem;
    padding: 0 1.2rem .2rem 4rem;    
    @media screen and (min-width: 541px){
        margin-right: 2.2rem;
        padding: 0 1.2rem .2rem 10rem;
    }
`;

export const PlanetsLink = styled(Link)`
    color: ${props => props.theme.white};
    border: .1rem solid white;
    border-top: none;
    border-right: none;
    font-size: clamp(1.6rem, 4vw,2rem);
    text-transform: uppercase;
    letter-spacing: .2rem;
    padding: 0 4rem .2rem 1.2rem;
    margin-top: 3rem;  
    margin-bottom: -.5rem ;
    @media screen and (min-width: 541px){
        margin-top: 0;
        margin-left: 2.2rem;
        padding: 0 10rem .2rem 1.2rem;
    }
`;

export const ArrowLeft = styled(Link)`
    width: 0;
    height: 0;
    border-style: solid;
    border-width:.5rem 2rem .5rem 0;
    border-color: transparent #ffffff transparent transparent;
    align-self: flex-start;
    margin-bottom: -3.1rem;
    @media screen and (min-width: 541px){
       align-self: flex-end;
       margin-bottom: -.5rem;
    }
`;

export const ArrowRight = styled(Link)`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .5rem 0 .5rem 2rem;
    border-color: transparent transparent transparent #ffffff;
    align-self: flex-end;
    margin-bottom: 0;
    @media screen and (min-width: 541px){
       margin-bottom: -.5rem;
    }
`;

