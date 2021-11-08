import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Section,
    Overlay,
    Pane,
    MainSection,
    ButtonSection,
    ListSection,
    Header,
    Input,
    Select,
    Card,
    CardHeader,
    PSmall,
    HomeLink,
    RightShort,
    CardListHeader,
    DetailButton
} from '../sharedStyling';

const Characters = () => {
    const [people, setPeoples] = useState([]);
    const [setErrors] = useState('');
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

    // Get all characters
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const promises = [];
                // there are 87 characters. Get them all and push
                // them in the promises array
                for (let i = 1; i < 87 + 1; i++) {
                    promises
                        .push(
                            fetch(`https://swapi.py4e.com/api/people/${i}`)
                                .then(res => res.json())
                        );
                }
                // handle errors
                Promise.all(promises)
                    .then((data) => {
                        if (!data) {
                            setErrors(data)
                        }
                        // Add id to every object. This is important, so
                        // that we get the right person when we have sorted
                        // and want to see details
                        for (let i = 0; i < data.length; i++) {
                            data[i]["id"] = i;
                        }
                        setPeoples(data)
                    })
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchCharacter()
    }, [setErrors]);

    return (
        <Section as={motion.div}
            initial={{ scaleX: 0, x: "-60vw" }}
            animate={{ scaleX: 1, x: "0" }}
            exit={{ scaleX: 0, x: "-60vw" }}
            transition={{ duration: 0.5 }} id="characters">
            <Overlay>
                <Pane />
                <MainSection id="characters">
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
                    <HomeLink to="/">Get Back Home<RightShort /></HomeLink>
                    <ListSection >
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
                                <Card key={index}>
                                    <CardHeader>{item.name}</CardHeader>
                                    <PSmall>height</PSmall>
                                    <CardListHeader>{item.height}</CardListHeader>
                                    <DetailButton id="charDetail" to={`/character/${item.id + 1}`}>details</DetailButton>
                                </Card>
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

/**
 *
 * {!isLoading &&
                data.map((person, index) => {
                    return (
                        <div key={index}>
                            <p>{person.name}</p>
                            <Link to={`/character/${index + 1}`}>details</Link>
                        </div>
                    );
                })}
 */
