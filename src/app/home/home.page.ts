import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../auth/auth-service.service';
import { TabsPage } from '../tabs/tabs.page';
import { AuthResponse } from '../auth/auth-response';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  gebruiker:AuthResponse;

  constructor(private auth : AuthServiceService, private storage : Storage, private router : Router) {
    
   }

  ngOnInit() {
    this.checkStorage();
  }
  makeAccount(){
     this.auth.createAccount()
    .subscribe(
      data => {
        this.gebruiker = data
        this.storage.set("TOKEN", this.gebruiker.access_token)
        this.storage.set("id", this.gebruiker.id)
        this.router.navigate(['/tabs']);
      }      
    );
  }

  checkStorage(){

    this.storage.get('TOKEN').then((val) => {
      if(val == null){
        this.router.navigate(["/"]);
      }else {
        this.router.navigate(["/tabs"]);
      }
    });
  }

}
