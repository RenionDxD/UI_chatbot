import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat-module/chat/chat.component';
import { FilesSaveComponent } from './files-module/files-save/files-save.component'
import { GenerateModelComponent } from './generate-module/generate-model/generate-model.component'
import { ViewInformationComponent } from './view-information-module/view-information/view-information.component'
const routes: Routes = [
  { path: '', component: ViewInformationComponent },
  { path: 'view', component: ViewInformationComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'files', component: FilesSaveComponent },
  { path: 'generate_model', component: GenerateModelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
