import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() white: boolean = false;
}
