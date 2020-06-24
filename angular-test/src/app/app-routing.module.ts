import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
//import { DeleteBlogComponent } from './delete-blog/delete-blog.component';

const routes: Routes = 
[

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent },
  { path: 'view-blog', component: ViewBlogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
