import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgDragDropModule } from 'ng-drag-drop';
// import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule
    // NgDragDropModule.forRoot(),
    // DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
