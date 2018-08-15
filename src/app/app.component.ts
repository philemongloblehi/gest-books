import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
   // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAY53Tvbc4mJTRYQXUmm4zJ9NOON0cOsJc',
    authDomain: 'gestbooks-3f687.firebaseapp.com',
    databaseURL: 'https://gestbooks-3f687.firebaseio.com',
    projectId: 'gestbooks-3f687',
    storageBucket: '',
    messagingSenderId: '46956961681'
  };
  firebase.initializeApp(config);
  }
}
