import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit  {
name:string = '';
speed:number = 0;
model: string = '';
colors: Colors = {
   car:'', 
   salon:'',
   wheels: ''
 };
 options: string[] = [];

 constructor() {}

 ngOnInit(): void {
   this.name = 'Audi';
 this.speed = 150;
   this.model = 'RF8';
   this.colors = {
     car: 'White', 
     salon: 'Black',
   wheels: 'Silver'
   };
   this.options = ['ABS', 'Autopilot', 'AutoParking'];
 }

}

interface Colors {
  car: string, 
  salon: string, 
  wheels: string
}
