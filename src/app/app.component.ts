import { Component } from '@angular/core';
import { Data } from './Data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedData: Data[] = [];
  onUpdate(data){
    this.storedData.push(data);
    console.log(data);
  }
  // formContent: string;
  // formSecret: string;
  // // showSecret: boolean = false;
  // formData: Array<{content: string, secret: string,showSecret: boolean}> = [
  //   {content:"Hello World", secret:"thisISpa$$word", showSecret: false},
  //   {content:"Bye Bye World", secret:"thisISpa$$word", showSecret: false}
  // ];


  // onAdd() {
  //   if (!this.formContent && !this.formSecret) {
  //     return;
  //   }
  //   // this.formData.push({content:"dasd",secret:"dasd"});
  //   this.formData.push({content: this.formContent, secret: this.formSecret, showSecret: false});
  // }

  // showList() {

  // }

  // onShow(event: Event, arrIndex: number) {
  //   this.toggle(this.formData[arrIndex]);
  //   console.log(arrIndex);
  // }

  // private toggle(formData){
  //   switch(formData.showSecret){
  //     case true: formData.showSecret = false; console.log('true is hit'); break;
  //     case false: formData.showSecret = true; console.log('false is hit'); break;
  //   }
  // }

  // // private toggle(){
  // //   switch(this.showSecret){
  // //     case true: this.showSecret = false; break;
  // //     case false: this.showSecret = true; break;
  // //   }
  // // }
}
