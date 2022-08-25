import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  alert: boolean = false;

  constructor(private restoAdd: RestoService) { }

  ngOnInit(): void {
  }
  addSaveResto() {
    // console.log(this.addResto.value);
    this.restoAdd.addSaveResto(this.addResto.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
    });
    this.addResto.reset();
  }
  alertClose() {
    this.alert = false;
  }
}
