import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import Loader from '../../components/Loader/Loader';
import {
    SingleSection,
    Pane,
    MiddlePaneCard,
    CardOver,
    SingleCardHeader,
    SingleCard,
    CardListHeader,
    PSmall,
    BackLinks
} from '../sharedStyling';

const SingleCharacter = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    const { characterId } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${characterId}`, {})
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [characterId]);

    /** I changed the return from returning a loader to an empty string,
     * because I think th eempty string gives a smoother transition and
     * the fetch is rather quick.
     */
    if (loading) {
        return ""
    }

    return (
        <SingleSection as={motion.div}
            initial={{ scaleX: 0, x: "60vw" }}
            animate={{ scaleX: 1, x: "0" }}
            exit={{ scaleX: 0, x: "60vw" }}
            transition={{ duration: 0.5 }}>
            <Pane />
            <MiddlePaneCard id="charMiddlePane">
                <CardOver>
                    <SingleCard id="singleChar">
                        <>
                            <SingleCardHeader>{data.name}</SingleCardHeader>
                            <PSmall>Height</PSmall>
                            <CardListHeader>{data.height}</CardListHeader>
                            <PSmall>Mass</PSmall>
                            <CardListHeader>{data.mass}</CardListHeader>
                            <PSmall>Hair Color</PSmall>
                            <CardListHeader>{data.hair_color}</CardListHeader>
                            <PSmall>Skin Color</PSmall>
                            <CardListHeader>{data.skin_color}</CardListHeader>
                            <PSmall>Eye Color</PSmall>
                            <CardListHeader>{data.eye_color}</CardListHeader>
                            <PSmall>Birth Year</PSmall>
                            <CardListHeader>{data.birth_year}</CardListHeader>
                            <PSmall>Gender</PSmall>
                            <CardListHeader>{data.gender}</CardListHeader>
                            <BackLinks id="charBack" to="/characters">Back to Characters</BackLinks>
                            <BackLinks id="charBack" to="/">Back to homepage</BackLinks>
                        </>
                    </SingleCard>
                </CardOver>
            </MiddlePaneCard>
            <Pane />
        </SingleSection>
    )
}

export default SingleCharacter
