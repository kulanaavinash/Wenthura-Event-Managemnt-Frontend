import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { services } from 'src/app/services/services.component';
import { $ } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(
    private http: HttpClient
  ) { }

  // getMassage(){
  //   return this.http.get('http://localhost:8081/service/load');
  // }
  addService(services) {
    return this.http.post(`http://localhost:8081/service/add`, services);
  }

  getServiceList() {
    return this.http.get<services[]>('http://localhost:8081/service/all');
  }

  findServiceId(id) {
    return this.http.get<any>(`http://localhost:8081/service/find?id=${id}`);
  }

  updateService(services) {
    return this.http.put<any>('http://localhost:8081/service/update', services);
  }

  deleteService(id) {
    return this.http.delete<any>(`http://localhost:8081/service/delete?id=${id}`);
  }

  findServicePacName(name) {
    return this.http.get<any>(`http://localhost:8081/service/package?pacName=${name}`);
  }

  submitFormData(serviceName: string, serviceDisc: string, packageName: string, status: string, offor: string, file: File) {

    let data = new FormData();

    data.append("imageFile",file);
    data.append("ser_name",serviceName);
    data.append("ser_desc",serviceDisc);
    data.append("pac_name",packageName);
    data.append("ser_status",status);
    data.append("ser_offer",offor);

    return this.http.post<any>('http://localhost:8081/service/add',
      data
    );
  }

  updateFormData(serviceid: string, serviceName: string, serviceDisc: string, packageName: string, status: string, offor: string, file: File) {

    let data = new FormData();

    data.append("imageFile",file);
    data.append("ser_id",serviceid);
    data.append("ser_name",serviceName);
    data.append("ser_desc",serviceDisc);
    data.append("pac_name",packageName);
    data.append("ser_status",status);
    data.append("ser_offer",offor);

    return this.http.put<any>('http://localhost:8081/service/update',
      data
    );
  }

  uploadImage(FormData) {
    return this.http.post<any>('http://localhost:8081/service/uploadImage',
      FormData
    );
  }

  getImage(imgId) {
    return this.http.get<any>(`http://localhost:8081/service/getImage?id=${imgId}`);
  }
}
