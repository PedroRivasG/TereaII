import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, AbstractType } from '@angular/core';
import { estudiante } from '../entidades/estudiante';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
 
  @Input() usuario:estudiante= {} as estudiante;
  usuarios:any;
  registro='Agregar Estudiante';
  id: string | null ;
  
  constructor( private http:HttpClient, 
               private aRouter: ActivatedRoute,
               private router: Router ) { 
    
    this.id= this.aRouter.snapshot.paramMap.get('id');
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    }); 
  } 

  update(): void {
    
    if(this.id === null){
      this.registro='enviarPost'
    } else {
      this.registro='update'
    }
    console.log("el id es igual a = " + this.id );
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+this.id)
    .subscribe(Response =>{
      this.usuario=Response; 
     console.log(Response);    
    }, error => {
      console.log(error)
    });
  }

  enviarPos():void{
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
      this.usuario = {} as estudiante;
    });
  }
  
  ngOnInit(): void {
    this.update();
  }

}
