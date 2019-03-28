import { Component, Output, EventEmitter } from '@angular/core';
import { Data } from '../Data.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  formContent: string=null;
  formSecret: string=null;
  // showSecret: boolean = false;
  @Output() formAdded = new EventEmitter<Data>();

  // formData: Array<{content: string, secret: string,showSecret: boolean}> = [];
  // formData: Data[] = [];

  onAdd() {
    if (!this.formContent || !this.formSecret) {
      return;
    }
    // this.formData.push({content:"dasd",secret:"dasd"});
    // this.formData.push({content: this.formContent, secret: this.formSecret, showSecret: false});
    const formData: Data = {
      content: this.formContent,
      secret: this.formSecret,
      showSecret: false
    };
    // this.formData.push({
    //   content: this.formContent,
    //   secret: this.formSecret,
    //   showSecret: false
    // });
    // console.log(formData);
    this.formAdded.emit(formData);
    this.formContent = '';
    this.formSecret = '';
  }

}
