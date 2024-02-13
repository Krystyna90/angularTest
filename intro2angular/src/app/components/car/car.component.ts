import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
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

 carSelect(carName: string) {
  if(carName === 'bmw') {
    this.name = 'BMW';
    this.speed = 170;
      this.model = 'M5';
      this.colors = {
        car: 'Black', 
        salon: 'White',
      wheels: 'Silver'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
  } else if( carName === 'audi') {
    this.name = 'Audi';
    this.speed = 170;
      this.model = 'M5';
      this.colors = {
        car: 'Black', 
        salon: 'White',
      wheels: 'Silver'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
  } else {
    this.name = 'Mercedes';
    this.speed = 170;
      this.model = 'M5';
      this.colors = {
        car: 'Black', 
        salon: 'White',
      wheels: 'Silver'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
  }
 
 }

 addOption(option: string) {
this.options.unshift(option);
return false;
 }

 deleteOption(option: string) {
  for(let i =0; i < this.options.length; i++) {
    if(this.options[i] == option) {
this.options.splice(i ,1);
break;
    }
  }
 }
 }
 
interface Colors {
  car: string, 
  salon: string, 
  wheels: string
}
