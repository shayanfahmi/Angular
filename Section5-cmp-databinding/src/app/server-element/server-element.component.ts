import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  constructor() {
    console.log('constructor called.');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

}
