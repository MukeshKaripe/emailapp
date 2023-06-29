import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogueBodyComponent } from '../dialogue-body/dialogue-body.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

 
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  reactiveForm!: FormGroup;
  constructor(public dialog: MatDialog) {
  }


  ngOnInit(): void {
    
    this.reactiveForm = new FormGroup({
      to:new FormControl('',[ Validators.required,Validators.email]),
      subject:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
      
     })
  }

  

  visible: boolean = false;



  openDialog(){
    this.visible = true;
  }
  
  
    checked: boolean = false;
    date: Date | undefined;


    userArray :any[]=[];

    onSubmit(){
      console.log(this.reactiveForm.value);
    
      this.userArray.push(this.reactiveForm.value);
    
      
      localStorage.setItem('userdata',JSON.stringify(this.userArray))
      
      console.log(this.userArray);
    }
}
