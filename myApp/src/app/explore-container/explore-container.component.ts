import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  list = true;
  add = false;
  profile = false;

  constructor() {

  }

  ngOnInit() {

    if (this.name === 'Tab 1 page') {
      this.list = true;
      this.add = false;
      this.profile = false;
    }
    else if (this.name === 'Tab 2 page') {
      this.list = false;
      this.add = true;
      this.profile = false;
    }
    else if (this.name === 'Tab 3 page') {
      this.list = false;
      this.add = false;
      this.profile = true;
    }
  }

}
