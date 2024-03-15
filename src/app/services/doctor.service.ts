import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _HttpClient:HttpClient) { }
  getDoctors():Observable<any>{
    return this._HttpClient.post('https://imake-app.com:4001/api/doctors/doctorFilter',
    {
      "price_from": 0,
      "price_to": 500,
      "category_id": "659c11de870fb96c7a2c0057",
      "city_id": "65ad623ec4d5a2a836c60ff6"
    }
    )
  }
}
