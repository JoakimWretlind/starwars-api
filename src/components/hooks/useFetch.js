import { useState, useEffect } from "react";

const useFetch = (url, items) => {
    const [data, setData] = useState([]);
    const [error, setErrors] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = [];
                for (let i = 1; i < items; i++) {
                    console.log(items)
                    promises
                        .push(
                            fetch(`${url}${i}`)
                                .then(res => res.json())
                        );
                }

                Promise.all(promises)
                    .then((data) => {
                        if (!data) {
                            setErrors(data)
                        }
                        // Add id to every object. This is important so
                        // that we get the right person when we have sorted
                        // and want to see details
                        for (let i = 0; i < data.length; i++) {
                            data[i]["id"] = i;
                        }
                        setData(data)
                    })
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchData()
    }, [url, setErrors]);

    return { data, error }
}

export default useFetch