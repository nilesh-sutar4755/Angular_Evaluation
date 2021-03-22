import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() dataArr;
  @Output() passData = new EventEmitter();

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if (this.utilityService.isSorted(this.dataArr, 'value')) {
      this.passData.emit({
        status: true
      })
    }
  }

}
