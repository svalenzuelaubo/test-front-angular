import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  constructor(private loginService : LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.user = new UserModel();
    this.user.email = "sebastian.valenzuelavaras@gmail.com";
    this.user.password = "";
  }

  login(form : NgForm){

    console.log(form);
    if(form.invalid) {return;}
    console.log(this.user);

    this.loginService.login(this.user).subscribe( data =>{
        console.log(data);
        //Si la respuesta es correcta redirecciona al Home
        this.router.navigateByUrl('/home');
    }, (err)=>{
        console.log(err);
    });
  }

}
