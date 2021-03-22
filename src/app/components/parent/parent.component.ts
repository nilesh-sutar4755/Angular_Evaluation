import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, public utilityService:UtilityService) { }

  ngOnInit(): void {

    // Shuffle both arrays initially
    this.dataArr1.sort(() => Math.random() - 0.5);
    this.dataArr2.sort(() => Math.random() - 0.5);
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  onClick(type) {
    if (type == 'shuffle') {
      this.dataArr1.sort(() => Math.random() - 0.5);
      if (!this.utilityService.areArraysEqual(this.dataArr1, this.dataArr2)) {
        this.dataArr2.sort(() => Math.random() - 0.5);
      }
    } else {
      this.dataArr1.sort((a, b) => a.value - b.value);
    }
  }

  getData(e, type) {
    if (type == 'child_1') {
      if (e.status) {
        this.dataArr2.sort((a, b) => a.value - b.value);
      }
    }

    if (type == 'child_2') {
      if (e.status) {
        this.dataArr2.sort((a, b) => a.value - b.value);
      }
    }
  }

  // Child Component 1 Array
  dataArr1 = [
    {
      value: 1,
      color: '#000000'
    },
    {
      value: 2,
      color: '#2B8EAD'
    },
    {
      value: 3,
      color: '#333333'
    },
    {
      value: 4,
      color: '#6F98A8'
    },
    {
      value: 5,
      color: '#FFFFFF'
    },
    {
      value: 6,
      color: '#BFBFBF'
    },
    {
      value: 7,
      color: '#EFEFEF'
    },
    {
      value: 8,
      color: '#2F454E'
    },
    {
      value: 9,
      color: '#72C3DC'
    }
  ]

  // Child Component 2 Array
  dataArr2 = [
    {
      value: 1,
      color: '#000000'
    },
    {
      value: 2,
      color: '#2B8EAD'
    },
    {
      value: 3,
      color: '#333333'
    },
    {
      value: 4,
      color: '#6F98A8'
    },
    {
      value: 5,
      color: '#FFFFFF'
    },
    {
      value: 6,
      color: '#BFBFBF'
    },
    {
      value: 7,
      color: '#EFEFEF'
    },
    {
      value: 8,
      color: '#2F454E'
    },
    {
      value: 9,
      color: '#72C3DC'
    }
  ]

}
