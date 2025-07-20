import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { AppComponentA } from "./app-component-a";
import { AppComponentB } from "./app-component-b";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-component-parent",
  imports: [AppComponentA, AppComponentB,NgFor],
  template: `
<h3>Component Parent</h3>
<h1>Angular Service Demo</h1>

<!-- HTTP Call Example -->
<h2>Posts from API:</h2>
<ul>
  <li *ngFor="let post of posts">{{ post.title }}</li>
</ul>

<hr>

<!-- Data Sharing Example -->
<app-component-a></app-component-a>
<app-component-b></app-component-b>

  `,
})
export class AppComponentParent implements OnInit {
    posts :any[] = [];
    constructor( private postService: PostService) {
console.log("AppComponentParent initialized");      
    }
    ngOnInit() {
        this.postService.getPosts().subscribe(data => {
            this.posts= data.slice(0, 5); // Get first 5 posts
            console.log("Posts fetched:", this.posts);
        });
    }



}