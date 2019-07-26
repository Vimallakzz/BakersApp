import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userList = [
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    },
    {
      userName: "David James",
      designation: "12131123 - Performance",
      date: new Date("2019-07-02"),
      info: "lorem ipsum door sit lorem ipsum door"
    }
  ]

  chartList = [
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    },
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    },
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    },
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    },
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    },
    {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    }
    , {
      userName: "Baker",
      message: "Hi, got an issue on my process",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Tsf",
      message: "lorem ipsum door sit lorem ipsum door sit sldkflkds ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: false
    },
    {
      userName: "Me",
      message: "lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit loresdflkdsf rem ipsum door sit lorem ipsum door sit lorem ipsum door sit lorem ipsum door sit",
      date: new Date("2019-07-02"),
      isme: true
    }
  ]
}
