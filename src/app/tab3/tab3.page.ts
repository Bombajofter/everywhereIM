import { Component } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storage: Storage, private router:Router, private auth:AuthServiceService) {}

  deleteAccount(){
    this.storage.get('id').then((val) => {
      this.auth.deleteAccount(val)
      .subscribe(data => {
        if(data == 204 || data ==200){
          this.storage.clear();
          this.router.navigate(['/']);
        }
      })
    });
  }

}
