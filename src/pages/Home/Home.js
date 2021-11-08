import { motion } from 'framer-motion';
import { Section, PSmall, PWide, PXWide } from "../sharedStyling";
import {
    InnerHome, Video, LeftPane, RightPane, Overlay, HeaderContainer, MainHeader,
    ButtonContainer, CharachtersLink, PlanetsLink, ArrowLeft, ArrowRight
} from "./home.style";
import MoonVid from '../../assets/videos/moon.mp4';

const Home = () => {
    const pageVariants = {
        initial: { opacity: .0, scale: .4 },
        in: { opacity: 1, scale: 1 },
        out: { opacity: .0, scale: .4 }
    }

    const pageTransition = {
        duration: .7,
        type: "tween"
    }

    return (
        <Section id="home" as={motion.div}
            style={{ position: "absolute" }}
            variants={pageVariants}
            transition={pageTransition}
            initial="initial"
            animate="in"
            exit="out">
            <InnerHome >
                <LeftPane>
                    <PSmall style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
                        59.5237411n, 16.248736e
                    </PSmall>
                </LeftPane>
                <Video autoPlay loop muted>
                    <source src={MoonVid} type="video/mp4" />
                </Video>
                <RightPane>
                    <PSmall style={{ transform: "rotate(90deg)" }}>
                        2021
                    </PSmall>
                </RightPane>
            </InnerHome>
            <Overlay>
                <PWide style={{ textAlign: "center" }}>A long time ago in a galaxy far, far away...</PWide>
                <HeaderContainer>
                    <MainHeader>star wars</MainHeader>
                    <PXWide style={{ textAlign: "center" }}>with the star wars api</PXWide>
                </HeaderContainer>
                <ButtonContainer>
                    <ArrowLeft to="/characters" aria-label="Link to characters" />
                    <CharachtersLink to="/characters">people</CharachtersLink>
                    <PlanetsLink to="/planets">planets</PlanetsLink>
                    <ArrowRight to="/planets" aria-label="Link to planets" />
                </ButtonContainer>
                <PWide style={{ textAlign: "center", whiteSpace: "nowrap" }}>by: Joakim Wretlind</PWide>
            </Overlay>
        </Section>
    )
}

export default Home
