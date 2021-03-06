import React            from 'react';
import { useContext }   from 'react';
import Card             from '../ui/Card';
import FavoritesContext from '../../store/favorite-context';
import classes          from './MeetupItem.module.css';

function MeetupItem(props) {
  const favoriteContext = useContext(FavoritesContext);
  const isItemFavorite = favoriteContext.isItemFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if(isItemFavorite) {
      favoriteContext.removeFavorite(props.id)
    } else {
      favoriteContext.addFavorite({
        id         : props.id,
        title      : props.title,
        description: props.description,
        image      : props.image,
        address    : props.address
      })
    }
  }

  return (
      <li key={props.key} className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{isItemFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
          </div>
        </Card>
      </li>
  );
}

export default MeetupItem;