import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SamplwService } from '../services/samplw.service';
// import { MatButtonModule } from '@angular/material/button';
// import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-body',
  templateUrl: './dialogue-body.component.html',
  styleUrls: ['./dialogue-body.component.scss'],

})
export class DialogueBodyComponent implements OnInit{
constructor(public services:SamplwService ){

}
  userArrayData:any[]=[];
 ngOnInit():void{

 }

 reactiveForm = new FormGroup({
  to:new FormControl('',[ Validators.required,Validators.email]),
  subject:new FormControl('',Validators.required),
  message:new FormControl('',Validators.required),
  
 })
 
//  onSubmit(){
//   console.log(this.reactiveForm.value);
// this.userArrayData.push(this.reactiveForm.value);
// console.log(this.userArrayData);

// localStorage.setItem('userValue',JSON.stringify(this.userArrayData));
//  }

 userArray :any[]=[];
onSubmit(){
  // console.log(this.reactiveForm.value);

  this.userArray.push(this.reactiveForm.value);

  
  // localStorage.setItem('userdata',JSON.stringify(this.userArray))
  this.services.MyData = this.userArray;
  console.log(this.userArray);
}


}
