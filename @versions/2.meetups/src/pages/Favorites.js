import React, { useContext } from "react";
import MeetupList            from '../components/meetups/MeetupList';
import FavoritesContext      from '../store/favorite-context';

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  let content;

  if(favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorite meetups yet, select some!</p>
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />
  }

  return (
    <section>
      <h1>My Favorites Meetups</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;