import React, { useEffect, useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from "./axios";



function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/card");

            setPeople(req.data);

        }
        fetchData();
    }, []);

    const outOfFrame = (name) =>{
        console.log(name + " left the screen...");
    }

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        // setLastDirection(direction);
    };
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((Character) => {
                return <TinderCard
                    className='swipe'
                    key={Character.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, Character.name)}
                    onCardLeftScreen={() => outOfFrame(Character.name)}
                >
                    <div style  = {{backgroundImage: `url(${Character.url}`}}
                    className="card" >
                        <h3 className='card__name'>{Character.name}</h3>
                        
                    </div>   
                </TinderCard>
            })}
        </div>
        
    </div>
  )
}

export default TinderCards