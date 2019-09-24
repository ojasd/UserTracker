import { Component, OnInit } from '@angular/core';
import { AppService } from "./services/app.service";
import * as firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDVvwQPnoon1bjbTqi_spdUk9avwmHSpoY',
  authDomain: 'ageless-granite-132217.firebaseapp.com',
  databaseURL: 'https://ageless-granite-132217.firebaseio.com',
  projectId: 'ageless-granite-132217',
  storageBucket: 'gs://ageless-granite-132217.appspot.com/',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UserTracker';

  constructor(private appService: AppService) {
    firebase.initializeApp(config);
  }

  ngOnInit(): void {
   // this.getMap();
  }

  getMap() {
    this.appService.getAPIData()
      .subscribe(
        res => console.log(res),
        (err) => console.log('Error Somewhere', err),
        () => {
          console.log('Finally');
        }
      )
  }
}
