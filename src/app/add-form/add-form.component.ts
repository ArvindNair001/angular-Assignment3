import { Component, Output, EventEmitter } from '@angular/core';
import { Data } from '../Data.model';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  formContent: string = null;
  formSecret: string = null;
  @Output() formAdded = new EventEmitter<Data>();

  onAdd() {
    if (!this.formContent || !this.formSecret) {
      return;
    }
    const formData: Data = {
      content: this.formContent,
      secret: this.formSecret,
      showSecret: false
    };
    this.formAdded.emit(formData);
    console.log("This is working 😉")
    this.formContent = '';
    this.formSecret = '';
  }

}
