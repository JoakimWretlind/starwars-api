import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import trooper from '../assets/images/trooper.jpg';

export const Section = styled.section`
    overflow-x: hidden;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.black};
    &#characters{
        position: absolute;
        background: linear-gradient(-15deg, #222, #d10000 );
    }
`;

export const Pane = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.black};    
`;

/** Fonts **/
export const Header = styled.h2`
    font-size: clamp(1.6rem, 4vw, 3.6rem);
    letter-spacing: clamp(1rem, 3vw, 2rem);
    text-transform: uppercase;
    margin-bottom: 3rem;
    padding-left: 2rem;    
`;

export const PSmall = styled.p`
    font-size: 1rem;
    letter-spacing: .1rem;
    margin: 1rem 0 -.5rem;
`;

export const PWide = styled.p`
    font-size: 1.2rem;
    letter-spacing: .5rem;
`;

export const PXWide = styled.p`
    font-size: 1.8rem;
    letter-spacing: clamp(.5rem,3vw,2.8rem);
    line-height: 1.1;
    margin: 1vh 0 10vh;
    @media screen and (min-width: 500px){
        margin: 0;
    }
`;

///////////////////////////////////////////////

/** PLANETS AND CHARACTERS LISTS **/
export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: max-content;
    min-height: 150rem;
    top: 0;
    z-index: 0;
    background: linear-gradient(-15deg, rgba(0, 21, 48, .6), rgba(0, 10, 22,.1));
    display: grid;
    grid-template-columns: 1fr minmax(50rem, 156rem) 1fr;
`;

export const MainSection = styled.div`
    position: relative;
    height: max-content;
    width: 100vw;
    max-width: 156rem;
    padding: 7vh 0 10vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (min-width: 541px){
        width: 100%;
        padding: 7vh 3rem 10vh;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem;
    @media screen and (min-width: 541px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

export const Input = styled.input`
    padding-left: .7rem;
    outline: none;
    border: none;
    width: 24rem;
    height: 2.4rem;
    border-radius: .3rem; 
    margin-bottom: 1.4rem;
    @media screen and (min-width: 541px){
        margin-right: 2rem;
         margin-bottom: 0;
    }
`;

export const Select = styled.select`
    height: 2.4rem;
    outline: none;
    border: .1rem solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    background: ${props => props.theme.black};
    border-radius: .3rem;
    padding: 0 .7rem;
`;

export const HomeLink = styled(Link)`
    color:#fff;
    border: .1rem solid ${props => props.theme.white};
    background: rgba(255,255,255,.2);
    height: 2.6rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .3rem;
    border-radius: .3rem;
    margin: 1rem 0 5rem;
    padding-bottom: .1rem;
    transition: .25s ease-out;
    &:hover{
        background: rgba(255,255,255,.7);
    }
`;

/** List-Section **/
export const ListSection = styled.div`
    height: 100%;
    width: 100%;
    max-width: 126rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 2rem;  
`;

export const IconImg = styled.img`
    height: 2rem;
    margin-left: 1rem;
`;

/** Icons **/
export const LeftShort = styled(BsArrowLeftShort)`
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    margin-right: .5rem;
`;

export const RightShort = styled(BsArrowRightShort)`
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    margin-left: .5rem;
`;

//////////////////////////////////////////////////////////////

/** Single Card **/
export const SingleSection = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(28rem, 156rem) 1fr;
`;

export const MiddlePaneCard = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#charMiddlePane{
        background-image: url(${trooper});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const CardOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.6));
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MiddlePane = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackLinks = styled(Link)`
    height: 4rem;
    width: 100%;
    background: rgba(0,0,0,.9);
    margin-top: 2rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
    letter-spacing: .1rem;
    font-size: 1.2rem;
    padding-bottom: .1rem;
    transition: .5s ease-out;
    &:hover{
        background: rgba(255,255,255,.3);
        color: ${props => props.theme.black};
    }
    &#charBack{
        color: ${props => props.theme.black};
        background: rgba(255,255,255,.7);
        &:hover{
        background: rgba(255,255,255,.3);
        color: ${props => props.theme.white};
    }
    }
`;