import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




//MatNativeDateModule,

import { 
  MatBadgeModule,
 
 } from '@angular/material/badge';

 import { 
  MatSidenavModule,
 
 } from '@angular/material/sidenav';

 import { 
  MatListModule,
 
 } from '@angular/material/list';
 import { 
  MatGridListModule,
 
 } from '@angular/material/grid-list';
 import { 
  MatFormFieldModule,
 
 } from '@angular/material/form-field';
 import { 
  MatInputModule,
 
 } from '@angular/material/input';

 import { 
  MatSelectModule,
 
 } from '@angular/material/select';

 import { 
  MatRadioModule,
 
 } from '@angular/material/radio';

 import { 
  MatDatepickerModule,
 
 } from '@angular/material/datepicker';


 import { 
  MatChipsModule,
 
 } from '@angular/material/chips';

 import { 
  MatTooltipModule,
 
 } from '@angular/material/tooltip';

 import { 
  MatTableModule,
 
 } from '@angular/material/table';

 import { 
  MatPaginatorModule,
 
 } from '@angular/material/paginator';


import { 
  MatButtonModule,
 } from '@angular/material/button';

 import { 
  MatCardModule,

 } from '@angular/material/card';


 import { 
  MatIconModule,

 } from '@angular/material/icon';

 import { MatToolbarModule,


 } from '@angular/material/toolbar';

 import { 
  MatProgressSpinnerModule
 } from '@angular/material/progress-spinner';

import { LayoutModule } from '@angular/cdk/layout';
//import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { MatFormFieldControl } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddBlogComponent,
    EditBlogComponent,
    ViewBlogComponent,
    MainnavComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
 
   

 
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
