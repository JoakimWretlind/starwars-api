// To easier handle numberformatting, I use numeral
import numeral from 'numeral';
import {
    Card, CardHeader, PSmall, CardListHeader, DetailButton
} from '../../pages/sharedStyling';

const PlanetsCard = ({ name, population, id }) => {
    return (
        <Card >
            <CardHeader>{name}</CardHeader>
            <PSmall>population</PSmall>
            {/** Make use of numeral that was imported at top.
                                     * Makes it easier for the user to read.
                                     */}
            <CardListHeader>{numeral(population).format("0,0")}</CardListHeader>
            <DetailButton to={`/planet/${id + 1}`}>details</DetailButton>
        </Card>
    )
}

export default PlanetsCard
