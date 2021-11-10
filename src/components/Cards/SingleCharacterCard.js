import React from 'react'
import { PSmall, BackLinks } from '../../pages/sharedStyling';
import { SingleCard, SingleCardHeader, CardListHeader } from './styling';


const SingleCharacterCard = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) => {
    return (
        <SingleCard id="singleChar">
            <>
                <SingleCardHeader>{name}</SingleCardHeader>
                <PSmall>Height</PSmall>
                <CardListHeader>{height}</CardListHeader>
                <PSmall>Mass</PSmall>
                <CardListHeader>{mass}</CardListHeader>
                <PSmall>Hair Color</PSmall>
                <CardListHeader>{hair_color}</CardListHeader>
                <PSmall>Skin Color</PSmall>
                <CardListHeader>{skin_color}</CardListHeader>
                <PSmall>Eye Color</PSmall>
                <CardListHeader>{eye_color}</CardListHeader>
                <PSmall>Birth Year</PSmall>
                <CardListHeader>{birth_year}</CardListHeader>
                <PSmall>Gender</PSmall>
                <CardListHeader>{gender}</CardListHeader>
                <BackLinks id="charBack" to="/characters">Back to Characters</BackLinks>
                <BackLinks id="charBack" to="/">Back to homepage</BackLinks>
            </>
        </SingleCard>
    )
}

export default SingleCharacterCard
