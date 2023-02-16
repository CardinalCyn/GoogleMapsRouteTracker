import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService:AuthService) {}
  loggedIn:boolean=false;
  //checks if user is logged in at start
  ngOnInit() {
    this.checkSession();
  }
  //sets data to navbar if user is logged in or not
  checkSession () {
    this.authService
    .checkSessionReq()
    .subscribe(
      data=>{
        if(data.status!=="signedIn"){
          this.loggedIn=false;
        }else{
          this.loggedIn=true;
        }
      }
    )
  }
}
