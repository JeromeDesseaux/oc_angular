import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts-service.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post:any;
  @Input() index:number;
  postsSubscription: Subscription;

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe();
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  constructor(private postService: PostsService) { }

  loveIt() {
    this.postService.loveIt(this.index);
  }

  hateIt() {
    this.postService.hateIt(this.index);
  }

  delete(){
    this.postService.delete(this.index);
  }

}
