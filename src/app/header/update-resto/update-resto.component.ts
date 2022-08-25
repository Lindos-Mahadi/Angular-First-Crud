import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  alert: boolean = false;

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {

    // LOAD CURRENT DATA INTO INPUT FIELD
    console.log(this.router.snapshot.params['id']);
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.editResto = new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email),
        address: new FormControl(result.address),
      })
    })
  }
  // UPDATE DATA 
  updateCollection() {
    console.log(this.editResto.value);
    this.resto.updateCurrentResto(this.router.snapshot.params['id'], this.editResto.value).subscribe((result) => {
      this.alert = true;
      console.warn(result);
    })
    this.editResto.reset({});
  }
  alertClose() {
    this.alert = false
  }
}

