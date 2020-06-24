import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
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
  selector: 'mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent {
  BlogData: any = [];
  blogs = [];
  dataSource: MatTableDataSource<Blog>;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  destroy$: Subject<boolean> = new Subject<boolean>();
  



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private apiService: ApiService,private breakpointObserver:BreakpointObserver) { 


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
