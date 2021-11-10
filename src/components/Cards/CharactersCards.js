import { PSmall } from '../../pages/sharedStyling';
import { CardListHeader, Card, DetailButton, CardHeader } from './styling';

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
