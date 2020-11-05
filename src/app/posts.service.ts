import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { stringify } from 'querystring';
import {Post} from './posts.model'
import {map,tap} from 'rxjs/operators'

@Injectable()
export class PostService{
constructor(private http:HttpClient){}


onCreatePostService(title:string,content:string) {
    // Send Http request
    const postData:Post={title,content};
    this.http.post('https://ng-complete-guide-60dbf.firebaseio.com/posts.json',postData,
    {
      observe:'response'
    }).subscribe(
      (responseData)=>{
        console.log(responseData);
      }
    );
  }


  fetchPostsService(){
    
   return this.http.get('https://ng-complete-guide-60dbf.firebaseio.com/posts.json',
   {
       headers:new HttpHeaders({"Custom-Header":'Heeeeellllloooo!!!!',
      responseType:'json'})
   })
    .pipe(map((responseData:{[i:string]:Post})=>{
      const ar:Post[]=[];
      for(const i in responseData)
      {
        
      
        ar.push({...responseData[i],id:i});
        
      }
      return ar;
    }
    )
    );
    }



    onDelete(){
       return this.http.delete('https://ng-complete-guide-60dbf.firebaseio.com/posts.json',
       {
         observe:'events',
         responseType:'text'
       }).pipe(tap(
         event=>{
           console.log(event);
         }
       ));
    }
  }
