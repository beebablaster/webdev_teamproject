import { Component, OnInit } from '@angular/core';
import { Portfolio} from '../models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: string;
  surname: string;
  age: number;
  githubLink: string;
  phoneNumber: string;
  portfolios: Portfolio[] = [];
  graph: any;
  url: any;

  // tslint:disable-next-line:typedef
  addPortfolio(){
    this.portfolios.push(new Portfolio(this.name, this.surname, this.age, this.phoneNumber, this.githubLink, this.graph));
  }
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  selectFile(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }
}
