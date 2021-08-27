import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:estudiante= {} as estudiante;
  usuarios:any;
 


  constructor(private http:HttpClient) { 
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });
  }
  

 enviarPos():void{
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
      this.usuario = {} as estudiante;
      /*alert("Usuario agregado con exitpo");*/
    });
  }

 /*openEdit(usr: estudiante){
    this.usuario = usr;
    console.log(usr);
  }*/

  
  ngOnInit(): void {
  }

}
