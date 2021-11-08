import styled from 'styled-components';

/** Parallax **/
// Yellow Planet
export const YellowPlanet = styled.div`
    position: absolute;
    top: 8vh;
    right: 0;
    height: min-content;
    z-index: 0;
    @media screen and (min-width: 359px){
      right: 2rem;
    }
    @media screen and (min-width: 541px){
       right: 8%;
    }
`;

export const YellowImg = styled.img`
    height: 20rem;    
    @media screen and (min-width: 541px){
       height: 30rem;
    }
`;

// Blue Planet
export const BluePlanet = styled.div`
    position: absolute;
    top: 90vh;
    left: -4%;
    height: min-content;
    z-index: 0;
    @media screen and (min-width: 541px){
        top: 80vh;
       left: -10%;
    }
`;

export const BlueImg = styled.img`
    height: 40vh;
    @media screen and (min-width: 541px){
        height: 70vh;
    }
    @media screen and (min-width: 900px){
        height: 80vh;
    }
    @media screen and (min-width: 1200px){
        height: 100vh;
    }
`;

// Jupiter
export const JupiterVid = styled.video`
    position: absolute;
    top: 190vh;
    left: 8%;
    width:90%;
    @media screen and (min-width: 541px){
       left: 10%;
       width: 60%;
       top: 160vh;
    }
`;

///////////////////////////////////////////////////
/** Single Planet **/


export const Video = styled.video`
    position: absolute;
    height: 100%;
    @media screen and (min-width: 541px){
        top: 5vh;
        left: 0;
        width: 100%;
        height: auto;
    }
`;