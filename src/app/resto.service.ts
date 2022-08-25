import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants"

  constructor(private http: HttpClient) { }

  getList() {
    // console.log('Get Data');
    return this.http.get(this.url);
  }

  // POST ITEM SERVICE

  addSaveResto(data: any) {
    // console.log(data);
    return this.http.post(this.url, data);
  }

  //  DELETE ITEM

  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // UPDATE OPERATION
  // GET CURRENT DATA FROM DB.JSON 
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  // UPDATE CURRENT ITEM
  updateCurrentResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }

}
