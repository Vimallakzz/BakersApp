import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Dashboard',
        path: '/dashboard',
        imgSrc: '../../../../assets/images/dashboard.svg'
      },
      {
        name: 'Complaints',
        path: '/complaint/list',
        imgSrc: '../../../../assets/images/complaints.jpg'
      },
      {
        name: 'Bakers',
        path: '/baker/list',
        imgSrc: '../../../../assets/images/baker.svg'
      },
      {
        name: 'TSF',
        path: '/tsf/list',
        imgSrc: '../../../../assets/images/user.svg'
      },
      {
        name: 'ASM',
        path: '/asm/list',
        imgSrc: '../../../../assets/images/user.svg'
      },
      {
        name: 'Inbox',
        path: '/inbox',
        imgSrc: '../../../../assets/images/inbox.svg'
      },
    ];
  }

}
