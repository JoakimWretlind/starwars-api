import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SingleCard = styled.div`
    position: absolute;
    width: max-content;
    min-width: 26rem;
    padding: 2rem;
    background: rgba(0,0,0,.3);
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &#singleChar{
        background: rgba(0,0,0,.7);
    }
`;

export const SingleCardHeader = styled.h2`
    font-size: 1.6rem;
    letter-spacing: .3rem;
    text-transform: uppercase;
    @media screen and (min-width: 359px){
        font-size: 2rem;
        letter-spacing: .5rem;
    }
    @media screen and (min-width: 541px){
        font-size: 2rem;
        letter-spacing: .3rem;
    }
`;

export const CardListHeader = styled.h4`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-top: .5rem;
`;

export const Card = styled.div`
    position: relative;
    background: #111;
    height: 30vh;
    width: 20rem;
    border-radius: .5rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0 1rem;
    box-shadow: 0 0 1rem rgba(161,216,232,.2);
    @media screen and (min-width: 541px){
        height: 25vh;
        margin: .5rem 1rem;
    }
`;

export const DetailButton = styled(Link)`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    height: 4rem;
    background: #BA8141;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: .3rem;
    border-radius: 0 0 .3rem .3rem;
    transition: .25s ease-out;
    &:hover{
        background: #EE9D2A;
    }
    &#charDetail{
        background: ${props => props.theme.red};
        &:hover{
        background: #A20507;
    }
    }
`;

export const CardHeader = styled.h3`
    font-size: 1.4rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    text-align: center;
`;