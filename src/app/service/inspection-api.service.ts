import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIURL = "https://localhost:7028/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/Inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIURL + '/Inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/Inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/Inspections/${id}`)
  }
  // Inspection Types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/InspectionTypes');
  }

  addInspectionType(data: any) {
    return this.http.post(this.inspectionAPIURL + '/InspectionTypes', data);
  }

  updateInspectionType(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/InspectionTypes/${id}`, data);
  }

  deleteInspectionType(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/InspectionTypes/${id}`)
  }

  // Status
  getStatus(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/Status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionAPIURL + '/Status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/Status/${id}`)
  }

}

