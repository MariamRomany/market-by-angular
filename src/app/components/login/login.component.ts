import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginError:string='';
  constructor(private as :AuthService , private router:Router) { }

  ngOnInit() {
  }

  login(form) {
    let data = form.value
    this.as.login(data.email , data.password)
    
    .then(result => {
      this.loginError='',
      this.as.login(result.user.uid , data.name).then(() => {
        this.router.navigate(['/'])
      })
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }
  
}
