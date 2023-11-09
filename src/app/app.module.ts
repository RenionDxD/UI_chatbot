import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModuleModule } from './chat-module/chat-module.module';
import { FilesModuleModule } from './files-module/files-module.module'
import { GenerateModuleModule } from './generate-module/generate-module.module'
import { ViewInformationModuleModule } from './view-information-module/view-information-module.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModuleModule,
    FilesModuleModule,
    GenerateModuleModule,
    ViewInformationModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
