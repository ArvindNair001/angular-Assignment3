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
  // formData: Array<{content: string, secret: string,showSecret: boolean}> = [
  //   {content:"Hello World", secret:"thisISpa$$word", showSecret: false},
  //   {content:"Bye Bye World", secret:"thisISpa$$word", showSecret: false}
  // ];

  onShow(event: Event, arrIndex: number) {
    this.toggle(this.formData[arrIndex]);
    console.log(arrIndex);
  }

  private toggle(formData){
    switch(formData.showSecret){
      case true: formData.showSecret = false; break;
      case false: formData.showSecret = true; break;
    }
  }

  // private toggle(){
  //   switch(this.showSecret){
  //     case true: this.showSecret = false; break;
  //     case false: this.showSecret = true; break;
  //   }
  // }
}
