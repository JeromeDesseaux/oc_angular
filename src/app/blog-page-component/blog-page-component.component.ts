import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts-service.service';


@Component({
  selector: 'app-blog-page-component',
  templateUrl: './blog-page-component.component.html',
  styleUrls: ['./blog-page-component.component.scss']
})
export class BlogPageComponentComponent implements OnInit {

  posts: any[];
  postsSubscription: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts:any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
