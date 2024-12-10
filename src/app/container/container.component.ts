import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'John', 'Mary', 'Jane', 'Peter'];

  searchhText: string = '';

  setSearchText(value: string) {
    this.searchhText = value;
  }
}
