import { Component, OnInit, OnDestroy } from '@angular/core';
//import { dataService } from '../data.service';
import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { delay,takeUntil } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

	blogs = [];
	destroy$: Subject<boolean> = new Subject<boolean>();
	constructor(private dataService: DataService) { }
	ngOnInit() {
	//	this.dataService.get().subscribe((data: any[])=>{  
	//		console.log(data);  
	//		this.blogs = data;  
	console.log("start");  
	this.dataService.get().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{  
		console.log(res);  
		this.blogs = res.body;  
	})  


  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

	public firstPage() {
    this.blogs = [];
    this.dataService.sendGetRequestToUrl(this.dataService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.blogs = res.body;
    })
  }
  public previousPage() {

    if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
      this.blogs = [];
      this.dataService.sendGetRequestToUrl(this.dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.blogs = res.body;
      })
    }

  }
  public nextPage() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.blogs = [];
      this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.blogs = res.body;
      })
    }
  }
  public lastPage() {
    this.blogs = [];
    this.dataService.sendGetRequestToUrl(this.dataService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.blogs = res.body;
    })
  }
}
