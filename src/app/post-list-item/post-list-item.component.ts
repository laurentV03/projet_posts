import { Component, OnInit, Input} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post_1: Post;
  
  constructor() { 
  }

  ngOnInit() {
    this.upDate();
  }

  onLoveIt() {
    this.post_1.loveIts++;
    this.upDate();
  }

  onDontLoveIt() {
    this.post_1.loveIts--;
    this.upDate();
  }

  upDate() {
    this.post_1.createdAt = new Date();
  }
}
