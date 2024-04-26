import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post, PostsService } from "./post.service";
import { Observable, delay, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PostResolver implements Resolve<Post> {
    constructor(private postServce: PostsService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | Observable<Post> | Promise<Post> {
        return of(this.postServce.getById(+route.params['id']) as any).pipe(
            delay(1500)
        ) as Post | Observable<Post> | Promise<Post>    
    }
}