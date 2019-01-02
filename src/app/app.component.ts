import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.",
      loveIts: 1,
      created_at: Date.now()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.",
      loveIts: -1,
      created_at: Date.now()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor facilisis. Morbi volutpat mollis massa eget rutrum. In tempor, ipsum quis efficitur ultrices, turpis nibh auctor lorem, ut pretium enim odio id arcu. Proin non magna vulputate, mattis quam in, tristique dui. Cras bibendum ligula ut convallis tempor. Curabitur ex sapien, vulputate ut mollis id, laoreet a ipsum. Mauris rhoncus velit vitae tristique porta.",
      loveIts: 0,
      created_at: Date.now()
    }
  ]
}
