import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title: title,
      content: content
    }
    
    this.http.post<{name: string}>(
      'https://ng-recipe-app-ab758-default-rtdb.firebaseio.com/posts.json', 
      postData).subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchPost() {
    return this.http.get<{[key: string]: Post}>('https://ng-recipe-app-ab758-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((responseData: {[key: string]: Post}) => {
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    }));
  }
}