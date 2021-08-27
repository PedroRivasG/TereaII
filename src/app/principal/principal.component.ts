import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { estudiante } from '../entidades/estudiante';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }

  
  ngOnInit(): void {
  }

}
