import React from "react";
import MeetupNewForm from "../components/meetups/MeetupNewForm";
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const oHistory = useHistory();

  function submittingMeetUp(oMeetUp) {
    fetch(
      'https://douglas-636d9.firebaseio.com/meetups.json',
      {
        method : 'POST',
        body   : JSON.stringify(oMeetUp),
        headers: {
          'Content-Type' : 'application:json'
        }
      }
    ).then(() => {
      oHistory.replace('/');
    });
  }

  return (
    <section>
      <h1>Add a New Meetup</h1>
      <MeetupNewForm submittingMeetup={submittingMeetUp}/>
    </section>
  );
}

export default NewMeetupPage;