import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

//import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { delay,takeUntil } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Blog } from '../shared/Blog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Subject {
  name: string;
}

@Component({
  selector: 'add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetBlogForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  blogForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  dataSource: MatTableDataSource<Blog>;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private blogApi: ApiService,
    private breakpointObserver:BreakpointObserver
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.blogForm = this.fb.group({
      blog_name: ['', [Validators.required]],
      blog_description: ['', [Validators.required]],
      blog_image: ['', [Validators.required]],
      blog_details: ['', [Validators.required]],
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }  


  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.blogForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitBlogForm() {
    if (this.blogForm.valid) {
      console.log(this.blogForm.value);
      this.blogApi.AddBlog(this.blogForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/view-blog'))
      });
    }
  }

}
