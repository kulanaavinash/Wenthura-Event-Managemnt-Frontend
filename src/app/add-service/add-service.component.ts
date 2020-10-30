import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceInt } from '../model/ServiceInt';
import { ServiceListService } from '../service/data/service-list.service';
import { services } from '../services/services.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  id: number;
  service: services;
  selectedFile: File = null
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  uploadState = false;
  errorMassage = "";
  errorSubmitMassage = "";

  constructor(
    private route: ActivatedRoute,
    private serviceList: ServiceListService,
    private router: Router
  ) { }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0]
    this.uploadState = false;
    // console.log(this.selectFile);
  }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  // }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service = new services('', '', '', '', '', '', '');

    if (this.id > 0) {
      this.serviceList.findServiceId(this.id)
        .subscribe(
          data => {
            this.service = data
          },
          err => {
            console.log("error");
          }
        )
    }
  }

  ifreturned(res): void {
    console.log(res);
  }

  saveService() {

    if (this.selectedFile == null) {
      this.uploadState = true;
      this.errorMassage = "Please upload image !";
    } else 
    if (this.service.pacName=='' || this.service.serStatus=='') {
      this.uploadState = true;
      this.errorMassage = "Please select all field !";
    } else if (this.id > 0) {
      this.serviceList.updateFormData(
        this.service.serId,
        this.service.serName,
        this.service.serDesc,
        this.service.pacName,
        this.service.serStatus,
        this.service.serOffer,
        this.selectedFile
      ).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['packages'])
        },
        err => {
          console.log(err);
          this.errorSubmitMassage="Add service error—check it out!"
        }
      )
    } else {
      this.serviceList.submitFormData(
        this.service.serName,
        this.service.serDesc,
        this.service.pacName,
        this.service.serStatus,
        this.service.serOffer,
        this.selectedFile
      ).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['packages'])
        },
        err => {
          console.log(err);
          this.errorSubmitMassage="Add service error—check it out!"
        }
      )
    }

  }

}
