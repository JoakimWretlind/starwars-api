import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import numeral from 'numeral'
import { Video } from './planets-style';
import Loader from '../../components/Loader/Loader';
import {
    SingleSection,
    SingleCard,
    Pane,
    MiddlePaneCard,
    SingleCardHeader,
    CardListHeader,
    PSmall,
    BackLinks
} from '../sharedStyling';
import Mars from '../../assets/videos/mars.mp4';

export const Links = styled(Link)`
    margin: .5rem 0 1rem;
    font-size: 1.6rem;
    color: blue;
    text-transform: uppercase;
`;

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
        return <Loader />
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
                <SingleCard>
                    <>
                        <SingleCardHeader>{data.name}</SingleCardHeader>
                        <PSmall>Diameter</PSmall>
                        <CardListHeader>{numeral(data.diameter).format("0,0")}</CardListHeader>
                        <PSmall>Population</PSmall>
                        <CardListHeader>{numeral(data.population).format("0,0")}</CardListHeader>
                        <PSmall>Terrain</PSmall>
                        <CardListHeader>{data.terrain}</CardListHeader>
                        <PSmall>Gravity</PSmall>
                        <CardListHeader>{numeral(data.gravity).format("0,0")}</CardListHeader>
                        <PSmall>OrbitalPeriod</PSmall>
                        <CardListHeader>{numeral(data.orbital_period).format("0,0")}</CardListHeader>
                        <PSmall>RotationPeriod</PSmall>
                        <CardListHeader>{numeral(data.rotation_period).format("0,0")}</CardListHeader>
                        <PSmall>SurfaceWater</PSmall>
                        <CardListHeader>{numeral(data.surface_water).format("0,0")}</CardListHeader>
                        <BackLinks to="/planets">Back to Planets</BackLinks>
                        <BackLinks to="/">Back to homepage</BackLinks>
                    </>
                </SingleCard>
            </MiddlePaneCard>
            <Pane />
        </SingleSection>
    )
}

export default SinglePlanet
