

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Hobbies } from 'src/app/hobbies';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

hobby : Hobbies = {
  _id: '',
  name: '',

 
}
_id:string='';
name: string='';



allHobbie : Hobbies[] = [];

constructor(private dataService:DataService){}
ngOnInit(): void {
  this._id='';
   this.name='';
   this.allHobbie = [];
   this.getAllHobbies();

  }

  getAllHobbies(){
    this.dataService.getAllHobby().subscribe(res => {
      this.allHobbie = res;
    },err =>{
    console.log(err);
    })

  }

  getHobbyById(hobby:Hobbies){
   // console.log(hobby);
    
    this.dataService.getHobbyId(hobby._id).subscribe(res => {
      hobby = res;
      console.log(res)
    },err =>{
    console.log(err);
    })
  }

   deleteHobbyById(hobby:Hobbies){
    
   
     this.dataService.deleteHobbyById(hobby._id).subscribe(res => {
      //console.log(hobby._id);
      this.allHobbie = [];
      this.getAllHobbies();
    },err =>{
    //console.log('frfrfrfrfrfrf',err);
    })
   }

   createHobby(){
   // console.log('am hit');
    this.hobby.name = this.name;
    this.dataService.createHobby(this.hobby).subscribe(res => {
    this.ngOnInit();
      //this.getAllHobbies
    },err =>{
    console.log(err);
    })
   }

   editHobby(hobby:Hobbies){
    //console.log(hobby.id);
    
    this.getHobbyById(hobby);
    this._id=hobby._id;
    this.name = hobby.name;

   }


    updateHobby(){
      if(this.name == '' ){
        
      }
     this.hobby._id = this._id;
      this.hobby.name = this.name;
 

    this.dataService.updateHobbyById(this.hobby).subscribe(res => {
     this.ngOnInit();
    },err =>{
    console.log(err);
    })
    }




}
