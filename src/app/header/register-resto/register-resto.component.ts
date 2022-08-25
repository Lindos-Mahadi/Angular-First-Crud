import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-register-resto',
  templateUrl: './register-resto.component.html',
  styleUrls: ['./register-resto.component.css']
})
export class RegisterRestoComponent implements OnInit {

  registar = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  alert: boolean = false;

  constructor(private registerInfo: RestoService) { }


  ngOnInit(): void {
  }
  registerCollection() {
    this.registerInfo.registerUser(this.registar.value).subscribe((result) => {
      console.log(result);
    })
    this.registar.reset({})
    this.alert = true;
  }
  alertClose() {
    this.alert = false
  }

}
