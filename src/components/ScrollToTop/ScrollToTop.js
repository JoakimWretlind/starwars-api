import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import spaceShip from '../../assets/images/spaceship.png'

const Scrolls = styled.span`
  position: fixed;
  bottom: 4vh;
  right: 5rem;
  height: 6rem;
  width: 6rem;
  background: radial-gradient(rgba(0,0,0,1), rgba(255,255,255,.3));
  color: #fff;
  font-size: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  transition: .3s ease-out;
  &:hover{
    background: radial-gradient(rgba(0,0,0,.7), rgba(255,255,255,.7));
}`

const FaSpaceShuttles = styled.img`
    padding-bottom: .2rem;
    height: 3.5rem;
    animation: scrollTop 0.5s alternate ease infinite;
    @keyframes scrollTop {
    from {
        transform: translateY(2px);
    }
    to {
        transform: translateY(-1px);
    }
}`

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            return window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);

        } else {
            setVisible(false);
        }
    };

    return (
        <>
            {visible && (<>
                <Scrolls onClick={scrollToTop}>
                    <FaSpaceShuttles src={spaceShip} />
                </Scrolls>
            </>
            )}
        </>
    )
}

export default ScrollToTop