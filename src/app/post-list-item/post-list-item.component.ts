import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { 
    this.upDate();
  }

  @Input() title : string;
  @Input() created_at: Date;
  @Input() content: string;
  @Input() loveIts: number;

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;
    this.upDate();
  }

  onDontLoveIt() {
    this.loveIts--;
    this.upDate();
  }

  upDate() {
    this.created_at = new Date();
  }
}
