import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import database from '../Firebase'
// import khusbu from '../images/khusbu.jpg'
// import bajaj from '../images/bajaj.jpg'

const TinderCards = () => {

  const [people, setPeople] = useState([])

  useEffect (() => {
    database.collection('people').onSnapshot(snapshot=> (setPeople(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div>
      <div className='tinderCards_cardContainer'>
        {people.map((person) => (
          <TinderCard className='swipe' key={person.name} preventSwipe={['down']}>
            <div style={{ backgroundImage: `url(${person.image})` }} className="card" >
              <div className="overlay">
                <h3 className='name'>{person.name}</h3>
                <h5 className='bio'>{person.bio}</h5>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
