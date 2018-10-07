import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

featureNavigator = 'recipes' ; 
//featureNavigator2 = 'shopping-list';

ngOnInit (){

  firebase.initializeApp({

    apiKey: "AIzaSyDx3gd6LnCp8wQqNdjhC5qbe4FyLOCkKGM",
    authDomain: "recipe-app-8eee5.firebaseapp.com",
  

  })
  
}

  OnNavigate(feature : string){


    // if (this.featureNavigator === 'recipes'){
    this.featureNavigator = feature ;
   // }

   // else

    //this.featureNavigator2 = feature ;






  }
}
