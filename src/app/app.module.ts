import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModuleModule } from './chat-module/chat-module.module'; // Importa tu módulo de chat

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
