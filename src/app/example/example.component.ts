import { Component, OnInit } from '@angular/core';
import { examples } from '../examples';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  examples = examples;
  constructor() { }

  ngOnInit(): void {
  }

}
