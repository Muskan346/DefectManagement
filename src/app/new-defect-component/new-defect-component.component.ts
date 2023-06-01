import { Component } from '@angular/core';

@Component({
  selector: 'app-new-defect-component',
  templateUrl: './new-defect-component.component.html',
  styleUrls: ['./new-defect-component.component.css']
})
export class NewDefectComponentComponent  {

  defectDetails!: string;
  title!: string;
  priority!: string;
  severity!: string;
  submitted: boolean = false;
  acknowledgementId!: string;

  submitForm() {
    this.acknowledgementId = this.generateAcknowledgementId();
    this.submitted = true;
  }

  generateAcknowledgementId() {
    return Math.random().toString(36).substring(2, 10);
  }

}
