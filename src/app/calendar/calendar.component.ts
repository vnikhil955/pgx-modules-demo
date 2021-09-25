import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  totalWeek = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
  ];
  months = [
    "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
  ]
  date = new Date();
  set_date = this.date.setDate(1);
  month = this.date.getMonth();
  present_day = this.date.getDate();
  present_year = this.date.getFullYear();
  present_week = this.date.getDay();
  

  numDays() {
    if(this.month == 0 || this.month == 2 || this.month == 4 || this.month == 6 || this.month == 7 || this.month == 9 || this.month == 11) {
      return new Array(31);
    }
    else if(this.month == 1)
    {
      if(this.present_year%4 == 0)
      {
        return new Array(29);
      }
      else{
        return new Array(28);
      }
    }
    else
      return new Array(30);
  }

  none(i: number) {
    return new Array(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
