import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  //Inputs
  @Input() text: string;

  //Inject services and init vars
  constructor(){
    this.text = '';
  }

}
