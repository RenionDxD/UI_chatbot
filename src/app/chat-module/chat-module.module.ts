import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ChatComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
   
  ]
})
export class ChatModuleModule { }
