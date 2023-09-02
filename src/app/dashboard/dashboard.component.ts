import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
Data=[
      {language:'csharp',discover:'AndersHejlsberg'},
      {language:'python',discover:'GuidoVanRossum'},
      {language:'c',discover:'DennisRitchie'},
      {language:'java',discover:'JamesGosling'}
      ]
      constructor(private ts:DataService){
        
      }
      mobiles=this.ts.mobiles;
}
