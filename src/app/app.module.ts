import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDefectComponentComponent } from './new-defect-component/new-defect-component.component';
import { DefectListComponentComponent } from './defect-list-component/defect-list-component.component';
import { DefectDetailsComponentComponent } from './defect-details-component/defect-details-component.component';
import { DefectsReportComponentComponent } from './defects-report-component/defects-report-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewDefectComponentComponent,
    DefectListComponentComponent,
    DefectDetailsComponentComponent,
    DefectsReportComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
