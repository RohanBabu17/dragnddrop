import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  {path:'',component:DragdropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
