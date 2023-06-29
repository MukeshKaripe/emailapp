import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftComponent } from './draft/draft.component';
import { SentComponent } from './sent/sent.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:HomeComponent,
children:[
  {path:'', component:InboxComponent},
  {path:'inbox', component: InboxComponent},
  {path:'sent', component: SentComponent},

//   {      path:'create', component:CreateComponent},
  {path:'draft', component:DraftComponent},
  {path:'create',component:CreateComponent},
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
