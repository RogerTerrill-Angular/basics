import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('Constructor fired', this.postImg)
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg)
  }

  ngOnChanges() {
    console.log('ngOnChanges() called')
  }

  ngDoCheck() {
    console.log('ngDoCheck() called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck')
  }

  // Projected Content has been inserted into child component
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
