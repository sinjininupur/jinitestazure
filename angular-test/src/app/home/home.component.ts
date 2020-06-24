import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
//import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { delay,takeUntil } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Blog } from '../shared/Blog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  BlogData: any = [];
  blogs = [];
  dataSource: MatTableDataSource<Blog>;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
	destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apiService: ApiService) { 


    this.apiService.GetBlogs().subscribe(data => {
      this.BlogData = data;
      this.dataSource = new MatTableDataSource<Blog>(this.BlogData);
      
    })   
  }
 


	ngOnInit() {
	//	this.dataService.get().subscribe((data: any[])=>{  
	//		console.log(data);  
	//		this.blogs = data;  
	console.log("start");    


  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
