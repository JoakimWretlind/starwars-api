import styled from 'styled-components';

export const Section = styled.section`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Video = styled.video`
    width: 220%;
    margin: auto;
    transform: rotate(90deg);
    
    @media screen and (min-width: 541px){
        width: 100%100%;
        max-width: 156rem;
        transform: rotate(0deg);
    }
    @media screen and (min-width: 769px){
        width: 100vw;
        height: 100vh;
        max-width: 156rem;
        transform: rotate(0deg);
    }
`;

export const Overlay = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: radial-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.h1`
    text-align: center;
    margin-left: 3rem;
    font-size: clamp(2.6rem, 26vw, 24rem);
    letter-spacing: clamp(.2rem, 8vw, 10rem);
    line-height: 1.1;
    @media screen and (min-width: 541px){
        margin-left: 14rem;
    }
`;

export const Subheader = styled.p`
    padding: 0 30rem;
    text-align: center;
    margin-left: 3rem;
    font-size: clamp(1.3rem, 5vw, 2.4rem);
    letter-spacing: .5rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
`;