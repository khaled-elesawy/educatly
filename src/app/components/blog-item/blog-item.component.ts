import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog: any;
  @Output() redirectedToPost = new EventEmitter<string>();

  redirectToPostDetails(postUrl: string){
    this.redirectedToPost.emit(postUrl)
  }
}
