declare var Ext: any;
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'radiofield-component',
  templateUrl: "./RadioField.html",
  styles: [``]
})
export class RadioFieldComponent implements OnInit  {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  constructor() { }

  ngOnInit() {}

}
