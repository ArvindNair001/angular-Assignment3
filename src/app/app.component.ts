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
  }
}
