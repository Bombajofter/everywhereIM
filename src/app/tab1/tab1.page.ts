import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { KleurenResponse } from '../auth/kleuren-response';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private storage: Storage, private auth : AuthServiceService) {}
  
  kleuren : KleurenResponse;

  ngOnInit() {
    this.getKleuren();
    console.log(this.kleuren);
  }

  getKleuren () {
    this.storage.get('id').then((val) => {
    this.auth.getKleuren(val)
    .subscribe(data => {
      this.kleuren = data;
    })
    });  
  }

}
