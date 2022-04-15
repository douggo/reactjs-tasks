import React      from 'react';
import { useRef } from 'react';
import Card       from '../ui/Card';
import classes    from './MeetupNewForm.module.css';

function MeetupNewForm(props) {

  const reference = {
    title       : useRef(),
    image       : useRef(),
    address     : useRef(),
    description : useRef()
  };

  function onSubmitMeetUpForm(event) {
    event.preventDefault();
    const meetUp = {
      title       : reference['title']['current'].value,
      image       : reference['image']['current'].value,
      address     : reference['address']['current'].value,
      description : reference['description']['current'].value 
    }
    props.submittingMeetup(meetUp);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitMeetUpForm}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' required ref={reference['title']}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image (URL)</label>
          <input type='url' id='image' required ref={reference['image']} />
        </div>
        <div className={classes.control  }>
          <label htmlFor='address'>Address</label  >
          <input type='text' id='address' required ref={reference['address']}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' row='5' ref={reference['description']}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Confirm</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupNewForm;