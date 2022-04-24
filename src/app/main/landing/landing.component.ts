import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    posts: any;

  constructor(private service: FetchService) { }

  ngOnInit() {
    this.service.getBlog().subscribe((data) => {
        this.posts = data;
        return this.posts;
    });
  }

}
