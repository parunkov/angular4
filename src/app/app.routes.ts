import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { PostResolver } from './post.resolver';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
        {path: 'extra', component: AboutExtraComponent}
    ]},
    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    {
        path: 'posts/:id', 
        component: PostComponent,
        resolve: {
            post: PostResolver
        }
    },
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'}
];
