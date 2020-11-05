import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './posts.model'
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post[] = [];
  isFetch=false;
  error=null;

  constructor(private http: HttpClient,private posts:PostService) {}

  ngOnInit() {
    
    this.fetchPosts();
    
  }

  onCreatePost(postData:Post) {
    // Send Http request
    this.posts.onCreatePostService(postData.title,postData.content);
    
    
  }

  onFetchPosts() {
    // Send Http request
    
    this.fetchPosts();
  
    
  }

  onClearPosts() {
    // Send Http request
    this.posts.onDelete().subscribe(()=>
      {
        this.loadedPosts=[];

      }
    )
    
  }

private fetchPosts(){
  this.isFetch=true;
  this.posts.fetchPostsService().subscribe(
    (post)=>{
      
      this.loadedPosts=post;
      this.isFetch=false;
      
    },(errors)=>{
      this.isFetch=false;
      this.error=errors.message;
      console.log(errors);

    }
  );
}
resetError(){
  this.error=null;
}
}