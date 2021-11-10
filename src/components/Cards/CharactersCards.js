import { Card, CardHeader, PSmall, CardListHeader, DetailButton } from '../../pages/sharedStyling';

const CharactersCard = ({ name, height, id }) => {
    return (
        <Card >
            <CardHeader>{name}</CardHeader>
            <PSmall>height</PSmall>
            <CardListHeader>{height}</CardListHeader>
            <DetailButton id="charDetail" to={`/character/${id + 1}`}>details</DetailButton>
        </Card>
    )
}

export default CharactersCard
