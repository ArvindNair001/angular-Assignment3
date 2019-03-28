import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../Data.model';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  logItems = 4;
  @Input() formData: Data[] = [];

  onShow(event: Event, arrIndex: number) {
    // To print timestamp use event.timestamp
    this.toggle(this.formData[arrIndex]);
    // console.log(arrIndex);
  }

  private toggle(formData) {
    switch(formData.showSecret){
      case true: formData.showSecret = false; break;
      case false: formData.showSecret = true; break;
    }
  }
}
