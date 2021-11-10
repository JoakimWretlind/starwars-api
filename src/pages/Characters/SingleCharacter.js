import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { SingleSection, Pane, MiddlePaneCard, CardOver } from '../sharedStyling';
import SingleCard from '../../components/Cards/SingleCharacterCard';

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
     * because I think the empty gives a smoother transition (and
     * the fetch is rather quick).
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
                    <SingleCard id="singleChar" {...data} />
                </CardOver>
            </MiddlePaneCard>
            <Pane />
        </SingleSection>
    )
}

export default SingleCharacter
