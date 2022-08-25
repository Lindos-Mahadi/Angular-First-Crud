import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {

  collectionItem: any = []

  constructor(private resto: RestoService, private restList: RestoService) { }

  ngOnInit(): void {

    this.restList.getList().subscribe((result) => {
      console.log(result);
      this.collectionItem = result;

    });
  }
  //  DELETE ITEM
  deleteResto(item: any) {
    // console.log(item)
    this.collectionItem.splice(item - 1, 1);
    this.restList.deleteResto(item).subscribe((itemDeleted) => {
      // console.log(itemDeleted);
    })
  }

}
