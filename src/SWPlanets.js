import {useState, useEffect} from 'react';

function SWPlanets()
{
    const[viewPlanet, setPlanet] = useState({});
    const[currentPlanet, setCurrentPlanet] = useState(1);

    const planetAPI = `https://swapi.dev/api/planets/${currentPlanet}/`;

    useEffect(
        () => {
            fetch(planetAPI)
            .then(response => response.json())
            .then(
                data => setPlanet(data)
            )
            .catch(error => console.error('Error', error))
        }, [planetAPI]
    )

    const handleNextPlanet = 
    () => {
        const nextPlanet = currentPlanet + 1;
        setCurrentPlanet(nextPlanet);
    }

    const handlePreviousPlanet = 
    () => {
        if(currentPlanet > 1) {
            const previousPlanet = currentPlanet - 1;
            setCurrentPlanet(previousPlanet);
        }
    }

    // Our buttons labels
    const previousButton = currentPlanet > 1 ? `Previous Planet ${currentPlanet - 1}` : 'Planet not Available';
    const nextButton = viewPlanet.name ? `Next Planet ${currentPlanet + 1}` : 'Fetching...';


    return(
        <>
            <h2>Planet Information</h2>
            <p>Name: {viewPlanet.name}</p>
            <p>Diameter: {viewPlanet.diameter}</p>
            <p>Climate: {viewPlanet.climate}</p>
            <button onClick={handlePreviousPlanet}>{previousButton}</button>- 
            <button onClick={handleNextPlanet}>{nextButton}</button>
        </>
    )
}

export default SWPlanets;