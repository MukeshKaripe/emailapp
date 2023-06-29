import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import { DraftComponent } from './draft/draft.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SentComponent } from './sent/sent.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DialogueBodyComponent } from './dialogue-body/dialogue-body.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    HomeComponent,
    DraftComponent,
    SentComponent,
    DialogueBodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule ,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    


    









    

  ],
  providers: [DialogueBodyComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
