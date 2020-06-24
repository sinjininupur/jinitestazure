import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/Blog';
import { ApiService } from '../shared/api.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

//import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { delay,takeUntil } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private blogApi: ApiService,private breakpointObserver:BreakpointObserver) 
{ }

  ngOnInit(): void {
  }

}
