import { Section } from "./error.style";
import { motion } from 'framer-motion';
import Burst from '../../assets/videos/burst.mp4';
import { Video, Overlay, Header, Subheader } from './error.style';
import { HomeLink } from '../sharedStyling';

const Error = () => {
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
            <Video autoPlay loop muted>
                <source src={Burst} type="video/mp4" />
            </Video>
            <Overlay>
                <Header>404</Header>
                <Subheader>you have found an unknown galaxy</Subheader>
                <HomeLink to="/">Get Back Home</HomeLink>
            </Overlay>
        </Section>
    )
}

export default Error
