import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'favorite';

  //Some backend service call will provide the data
  post={
    isFavorite : true
  }

  like={
    likesCount : 10,
    isLiked : true
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs){
    console.log("Favorite changed is called = " + eventArgs.newValue);
  }

}
