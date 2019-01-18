import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  postsSubject = new Subject<any[]>();
  
  private posts = [
    new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.',-1),
    new Post('Mon second post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.'),
    new Post('Mon troisième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.'),
    new Post('Mon dernier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.',1),
  ];

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  } 

  delete(index: number){
    this.posts.splice(index, 1)
    this.emitPostSubject();
  }

  loveIt(index: number){
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  hateIt(index:number){
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }
}
