import { Component } from '@angular/core';

@Component({
  selector: 'app-cpipe',
  templateUrl: './cpipe.component.html',
  styleUrls: ['./cpipe.component.css']
})
export class CPipeComponent {
person={
  'name':'shankar',
  'age':21,
  'gender':'male'
};
wish="good morning";
}
