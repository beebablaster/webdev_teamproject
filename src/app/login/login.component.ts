import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  response: any;
  constructor(public http : HttpClient) { }

  // tslint:disable-next-line:typedef
  search(){
    this.http.get(`https://api.github.com/users/` + this.username)
      .subscribe((response) => {
      this.response = response;
      console.log(this.response); });
  }

  ngOnInit(): void {
  }


}
