//navbar at top of all pages, changes depending if user is logged in or not
import { Component,Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:AuthService,private router:Router) {}
  //used to check if user is logged in or not, passed in from parent components
  @Input() loggedIn:boolean=false;
  //logout, queries auth service to see if user is logged out or not, and if successful, redirects to home
  logOut() {
    this.authService
    .logOutReq()
    .subscribe(data=>{
      if(data.status==="loggedOut"){
        this.router.navigate(["/"]);
      }
    })
  }
  //demo account for logging in
  logInDemo() {
    this.authService
    .loginReq("demo","123123")
    .subscribe(data=>{
      if(data.status==="loginSuccess"){
        this.router.navigate(['/main'])
      }else{
        console.log("error signing in with demo")
        console.log(data);
      }
    })
  }
}
