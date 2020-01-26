import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChatService} from '../chat.service';
import {Router} from '@angular/router';
import {Message} from '../model/message.model';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  user : any;
  public message : Message;
  public messages : Message[];

  //Code for Scrolling
// @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
 // @ViewChildren(this.ChatDialogComponent, { read: ElementRef }) chatItems: QueryList<ChatDialogComponent>;

  constructor(
    private chatService : ChatService,
    private router: Router
  ) {
    this.message = new Message('', 'assets/images/user.png', new Date());
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }

  ngOnInit() {
    this.user = localStorage.getItem("user");
    console.log(this.user, "logged in user")
    if(!this.user)
      this.router.navigateByUrl('');
  }

  /*ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }*/

  sendMessage(){
    this.message["timestamp"] = new Date();
    this.messages.push(this.message);

    this.chatService.getResponse(this.message["content"]).subscribe(res => {
      console.log(res);
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png' , res.timestamp)
      );
    // this.scrollToBottom();
    });
    this.message = new Message('', 'assets/images/user.png', new Date);
  }

  /*private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    } catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }*/
}

