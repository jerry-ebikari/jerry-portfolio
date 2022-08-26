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
  direction: any = 'left'
  sidebarStyles: any = {
    margin: 0,
    padding: 0,
    outline: 0
  }
  sidebarSiblingStyles: any = {
    'overflow-y': 'auto',
    'max-height': '100%',
    'height': '100% !important',
    'background-color': 'var(--navy)'
  }

  ngOnInit(): void {
    this.sidebarSetup()
    this.setSidebarAndContentWidth()
    // this.fetchEmailResponse().then(res => console.log(res)).catch(err => console.log(err))
  }

  fetchEmailResponse = async () => {
    let res = await fetch('https://formsubmit.co/lekarane@gmail.com', {
    // let res = await fetch('https://formsubmit.co/742cbb766c6be646d152251ecca36bd6', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Jerry',
        email: 'jerryebikarineedam@gmail.com',
        message: 'Test',
        _autoresponse: 'Email received'
      })
    });
    // console.log(res);
    return res;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sidebarSetup()
    this.setSidebarAndContentWidth()
  } 

  // CHECK SCREEN WIDTH
  isMobile() {
    return window.innerWidth < 768;
  }
  
  // SET SIDEBAR DIMENSIONS
  sidebarSetup() {
    if (window.innerWidth < 768) {
      this.transition = 'overlay';
      this.isVisible = false;
      this.isDimmedWhenVisible = true;
      this.direction = 'right';
    }
    else {
      this.transition = 'uncover';
      this.isVisible = true;
      this.isDimmedWhenVisible = false;
      this.direction = 'left';
    }
  }

  // SET SIDEBAR AND CONTENT WIDTH
  setSidebarAndContentWidth() {
    if (window.innerWidth > 768) {
      this.sidebarStyles.width = '20%';
      this.sidebarStyles.maxWidth = '236px';
      this.sidebarSiblingStyles.width = window.innerWidth < 1180 ? '80%' : `${window.innerWidth - 236}px`;
    }
    else {
      this.sidebarStyles.width ? delete this.sidebarStyles.width : '';
      this.sidebarSiblingStyles.width = '100%';
    }
  }

  // FIX CONTENT GOING OFF SCREEN
  resize(sidebar: any) {
    if (!this.isMobile()) {
      sidebar.close();
      sidebar.open();
    }
  }

  // CLOSE SIDEBAR
  close() {
    this.isVisible = false;
  }

  // OPEN SIDEBAR
  open() {
    this.isVisible = true;
  }

  navlinkClicked() {
    if (this.isMobile()) {
      this.close();
    }
  }
}
