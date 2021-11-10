import numeral from 'numeral'
import { PSmall, BackLinks } from '../../pages/sharedStyling';
import { SingleCard, SingleCardHeader, CardListHeader } from './styling';

const SinglePlanetCard = ({ name, diameter, population, terrain, gravity, orbital_period, rotation_period, surface_water }) => {
    return (
        <SingleCard>
            <>
                <SingleCardHeader>{name}</SingleCardHeader>
                <PSmall>Diameter</PSmall>
                <CardListHeader>{numeral(diameter).format("0,0")}</CardListHeader>
                <PSmall>Population</PSmall>
                <CardListHeader>{numeral(population).format("0,0")}</CardListHeader>
                <PSmall>Terrain</PSmall>
                <CardListHeader>{terrain}</CardListHeader>
                <PSmall>Gravity</PSmall>
                <CardListHeader>{numeral(gravity).format("0,0")}</CardListHeader>
                <PSmall>OrbitalPeriod</PSmall>
                <CardListHeader>{numeral(orbital_period).format("0,0")}</CardListHeader>
                <PSmall>RotationPeriod</PSmall>
                <CardListHeader>{numeral(rotation_period).format("0,0")}</CardListHeader>
                <PSmall>SurfaceWater</PSmall>
                <CardListHeader>{numeral(surface_water).format("0,0")}</CardListHeader>
                <BackLinks to="/planets">Back to Planets</BackLinks>
                <BackLinks to="/">Back to homepage</BackLinks>
            </>
        </SingleCard>
    )
}

export default SinglePlanetCard
