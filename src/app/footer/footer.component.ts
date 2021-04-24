import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openSocialMedia(media: string){
    if (media === 'telegram'){
      window.open(`https://t.me/joinchat/1jGZCOy82thlZDgy`); }
    else if (media === 'instagram'){
      window.open(`https://www.instagram.com/uskmb/`);
    }
    else if (media === 'mail'){
      window.open('https://www.gmail.com');
    }
    else if (media === 'facebook'){
      window.open(`https://www.facebook.com/`);
    }
  }
}
