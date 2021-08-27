import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { estudiante } from '../entidades/estudiante';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 
  usuario:estudiante= {} as estudiante;
  usuarios:any;


  constructor(private http:HttpClient, private router:Router) { 
    
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });
  } 

  update(id:number): void {
    //this.router.navigate(['/actualizar', id])
    
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
    .subscribe(Response=>{ 
      console.log(Response);
      this.usuario=Response;
      
    })
  }

  enviarPos():void{
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
      this.usuario = {} as estudiante;
    });
  }
  
 /*openEdit(usr: estudiante){
    this.usuario = usr;
    console.log(usr);
  }*/

  delete(id:number){
   
    this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/'+id)
    .subscribe(Response=> { 
      //console.log(Response)
      alert("Usuario Eliminado");
      window.location.reload();
    })

  }
  
  ngOnInit(): void {
  }

}
