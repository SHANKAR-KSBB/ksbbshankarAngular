import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent {
constructor(private http:HttpClient){}
ngOnInIt():void{
  this.http.get('https://fakestoreapi.com/products').subscribe(
  (data)=>
  {
    console.log(data)
  }
  )
}
}
