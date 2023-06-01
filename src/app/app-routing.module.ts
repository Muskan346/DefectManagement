import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectDetailsComponentComponent } from './defect-details-component/defect-details-component.component';
import { DefectListComponentComponent } from './defect-list-component/defect-list-component.component';

const routes: Routes = [
  {
    component : DefectListComponentComponent,
    path : "lists"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
