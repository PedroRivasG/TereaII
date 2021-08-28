import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-listar-uno',
  templateUrl: './listar-uno.component.html',
  styleUrls: ['./listar-uno.component.css']
})
export class ListarUnoComponent implements OnInit {

  usuario:estudiante= {} as estudiante;
  usuarios:any;
  mostrar='listado'
  id: string | null ;


  constructor(private http:HttpClient,private aRouter: ActivatedRoute, private router:Router) { 
    this.id= this.aRouter.snapshot.paramMap.get('id');

    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+this.id)
    .subscribe(Response=>{ 
      console.log(Response);
       this.usuarios=Response;
    })
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