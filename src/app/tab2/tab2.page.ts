import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthResponse } from '../auth/auth-response';
import { AuthServiceService } from '../auth/auth-service.service';
import { UserKleuren } from '../auth/user-kleuren';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  users : UserKleuren;

  constructor(private storage : Storage, private auth:AuthServiceService) {}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.auth.getAllUsers()
    .subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  changeOrder(id){
    this.users[id].kleuren = this.shuffle(this.users[id].kleuren);
  }

  shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
