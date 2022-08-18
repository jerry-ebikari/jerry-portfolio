import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isVisible = true;
  transition: any = 'uncover';
  isDimmedWhenVisible = false;

  ngOnInit(): void {
    this.sidebarSetup()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sidebarSetup()
  } 
  
  // SET SIDEBAR DIMENSIONS
  sidebarSetup() {
    if (window.innerWidth < 768) {
      this.transition = 'overlay';
      this.isVisible = false;
      this.isDimmedWhenVisible = true;
    }
    else {
      this.transition = 'uncover';
      this.isVisible = true;
      this.isDimmedWhenVisible = false;
    }
  }
}
