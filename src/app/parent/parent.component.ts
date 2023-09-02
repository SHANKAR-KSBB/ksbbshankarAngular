import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
currentitem='television';

items=['item1','item2','item3','item4'];
additem(newitem:string){
  this.items.push(newitem);
}
}
