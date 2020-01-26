import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './chat.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ChatDialogComponent],
  exports:[ChatDialogComponent],
  providers:[ChatService]
})
export class ChatModule { }
