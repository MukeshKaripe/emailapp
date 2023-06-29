import { Component, OnInit } from '@angular/core';
import { DialogueBodyComponent } from '../dialogue-body/dialogue-body.component';
import { SamplwService } from '../services/samplw.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit{
  currentTime:Date=new Date();
  
  sentDataArray:any;
  constructor(public data:DialogueBodyComponent,public services:SamplwService ){

    
  }

  ngOnInit(): void {
    this.sentDataArray = JSON.parse(localStorage.getItem('userdata')!);
  
 
 }
 
  }
 

