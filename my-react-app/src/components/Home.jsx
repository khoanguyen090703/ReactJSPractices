import { use, useEffect, useState } from "react";

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [clicks, setClicks] = useState(0);

    

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const clickGame = () => {
        setClicks(clicks + 1);
    }

    useEffect(() => {
        if(clicks === 0) return;

        if(clicks % 15 === 0) {
            alert("FizzBuzz");
        }
        else if(clicks % 3 === 0) {
            alert("Fizz");
        }
        else if(clicks % 5 === 0) {
            alert("Buzz");
        }  
    }
    , [clicks]);



    return (
        <div>
            <h2>Welcome to Rookies. It is {time}</h2>
            <button onClick={clickGame}>Clicky Game</button>
            <h1>Clicks: {clicks}</h1>
        </div>
    )
}

export default Home;