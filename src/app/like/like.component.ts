import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('likesCount') likesCount : number ;
  @Input('isAcive') isAcive : boolean;
  

  onClick() { 
   
    if(!this.isAcive){
      this.likesCount = this.likesCount + 1;
    }else{
      this.likesCount = this.likesCount - 1;
    }

    this.isAcive = !this.isAcive;

    console.log("likesCount = " + this.likesCount);
  }

}
