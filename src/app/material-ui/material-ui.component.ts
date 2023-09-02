import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.css']
})
export class MaterialUIComponent {

  constructor(private builder:FormBuilder){

  }
  materialform=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    phone:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required)
  });
  savematerial(){
    console.log(this.materialform.value);
  }
}
