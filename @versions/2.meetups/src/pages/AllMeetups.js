import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {

  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

  /*const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  
  useEffect(
    () => {
      setIsLoading(true);
      fetch(
        'https://douglas-636d9.firebaseio.com/meetups.json'
      ).then(
        response => {
          return response.json()
        }
      ).then(
        data => {
          const meetups = [];
          for(const key in data) {
            const meetup = {
              id : key,
              ...data[key]
            };
            meetups.push(meetup);
          }
          setIsLoading(false);
          setLoadedMeetUps(meetups);
        }
      );
    }, 
    []
  );

  if(isLoading) {
    return (
      <section>
        <p>Loading your meetups...</p>
      </section>
    );
  }  */
  return (
    <section>
      <h1>All Meetups:</h1>
      <MeetupList meetups={/*loadedMeetUps*/DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;