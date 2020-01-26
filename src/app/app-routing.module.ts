import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatModule} from './chat/chat.module';
import {ChatDialogComponent} from './chat/chat-dialog/chat-dialog.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChatDialogComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
