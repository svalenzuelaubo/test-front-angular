import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Login App URL

  private url = 'localhost:3000/api/users/login';//Aqui la url de login
  private idToken:string;


  constructor(private http:HttpClient) { 
    this.leerToken();
  }



  logout(){
    localStorage.removeItem('token');
  }

  login(user: UserModel){
    const login = {
      ///...user //Para enviar todos los datos del usuario
      email: user.email,
      password: user.password
    };
    return this.http.post(`${this.url}`,login).pipe(
      map(resp =>{
        console.log('Loguea');
        this.guardarToken( 'SuperToken' ); //O el token que retorne //resp['idToken']
        return resp;
      })
    )
  }


  private guardarToken( idToken: string){
    this.idToken = idToken;
    localStorage.setItem('token',idToken);
  }


  leerToken(){
    if(localStorage.getItem('token')){
      this.idToken = localStorage.getItem('token');
    }else{
      this.idToken = '';
    }

    return this.idToken;
  }


  estaAutenticado() : boolean{
    return this.idToken.length>2;
  }
}
