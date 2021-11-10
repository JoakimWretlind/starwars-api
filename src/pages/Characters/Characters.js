import { useState } from 'react';
// animations
import { motion } from 'framer-motion';
import useFetch from '../../components/hooks/useFetch';
import Card from '../../components/Cards/CharactersCards';
import {
    Section, Overlay, Pane, MainSection, ButtonSection, ListSection, Header,
    Input, Select, HomeLink, LeftShort
} from '../sharedStyling';

const Characters = () => {
    // there are 87 characters in the api
    const { data: people } = useFetch(`https://swapi.py4e.com/api/people/`, 87);
    const [searchTerm, setSearchTerm] = useState('');
    const [sorted, setSorted] = useState('');

    // set the current state of the items
    const handleSort = (e) => {
        setSorted(e.target.value)
    };

    // sort according to the correct buttonClick
    people.sort((a, b) => {
        if (sorted === "from-A") {
            return (a.name > b.name)
                ? 1 : ((a.name < b.name)
                    ? -1 : 0);
        } else if (sorted === "from-Z") {
            return (a.name < b.name)
                ? 1 : ((a.name > b.name)
                    ? -1 : 0);
        }
        else {
            return true
        }
    });

    return (
        <Section id="characters">
            <Overlay
                as={motion.div}
                initial={{ scaleX: 0, x: "-60vw" }}
                animate={{ scaleX: 1, x: "0" }}
                exit={{ scaleX: 0, x: "-60vw" }}
                transition={{ duration: 0.5 }}>
                <Pane />
                <MainSection >
                    <Header>Characters</Header>
                    <ButtonSection>
                        {/** In search, pass the key pressed as targe value */}
                        <Input
                            type="text"
                            placeholder="Search Planet..."
                            onChange={(event) => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                        <Select defaultValue="Sort" onChange={(e) => { handleSort(e) }}>
                            <option disabled value="Sort" >Sort</option>
                            <option value="from-A">Name A-Z</option>
                            <option value="from-Z">Name Z-A</option>
                        </Select>
                    </ButtonSection>
                    <HomeLink to="/"><LeftShort />Get Back Home</HomeLink>
                    <ListSection >
                        {/** Make items searchable **/}
                        {people.filter(item => {
                            if (searchTerm === "") {
                                return item
                            } else if (item.name?.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item
                            }
                            else {
                                return false
                            }
                        }).map((item, index) => {
                            return (
                                <Card key={index} {...item} />
                            )
                        })}
                    </ListSection>
                </MainSection>
                <Pane />
            </Overlay>
        </Section >
    )
}

export default Characters
