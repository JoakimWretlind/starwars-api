import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { Video } from './planets-style';
import { SingleSection, Pane, MiddlePaneCard } from '../sharedStyling';
import SinglePlanetCard from '../../components/Cards/SinglePlanetCard';
import Mars from '../../assets/videos/mars.mp4';

const SinglePlanet = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    const { planetId } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${planetId}`, {})
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [planetId]);

    if (loading) {
        return ""
    }

    return (
        <SingleSection as={motion.div}
            initial={{ scaleX: 0, x: "-60vw" }}
            animate={{ scaleX: 1, x: "0" }}
            exit={{ scaleX: 0, x: "-60vw" }}
            transition={{ duration: 0.5 }}>
            <Pane />
            <MiddlePaneCard>
                <Video autoPlay loop muted>
                    <source src={Mars} type="video/mp4" alt="video of mars rotating" />
                </Video>
                <SinglePlanetCard {...data} />
            </MiddlePaneCard>
            <Pane />
        </SingleSection>
    )
}

export default SinglePlanet
