import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceListService } from '../service/data/service-list.service';

export class services {
  constructor(
    public serId: string,
    // private pacId:number,
    public pacName: string,
    public serName: string,
    public serDesc: string,
    public serStatus: string,
    public serOffer: string,
    public serImg: string
  ) { }
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = []
  // msg = ''
  massage: string
  name: string

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(
    private serviceList: ServiceListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getServiceList();
    // console.log("name")
    this.name = this.route.snapshot.params['name']
    // this.service = new services(this.id, '', '', '', true, '', '');

    // if (this.name != ) {
      this.findServicePacName();
    // this.serviceList.findServicePacName(this.name).subscribe(
    //   response => {
    //     this.services = response;
    //     this.retrieveResonse = response;
    //     this.base64Data = this.retrieveResonse.picByte;
    //     this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    //   }
    // )
  }

  findServicePacName(){
    this.serviceList.findServicePacName(this.name).subscribe(
      response => {
        this.services = response;
        this.retrieveResonse = response;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    )
  }
  
  format(data) {
    return 'data:image/jpeg;base64,' + data;
  }

  // getMassage(){
  //   this.serviceList.getMassage().subscribe(
  //     response => this.getResponse(response)
  //   );
  // }

  // getResponse(response){
  //   console.log(response);
  //   console.log(response.message);
  // }
  getServiceList() {
    this.serviceList.getServiceList().subscribe(
      response => {
        this.services = response;
      }
    );
  }

  refreshService() {
    this.serviceList.getServiceList().subscribe(
      response => {
        this.services = response;
      }
    );
  }

  updateService(id) {
    // console.log(`update ${id}`)
    this.router.navigate(['services', id])
  }

  addTodo() {
    this.router.navigate(['services', -1])
  }

  deleteService(id) {
    this.serviceList.deleteService(id).subscribe(
      response => {
        this.massage = `Delete services successfully`
        console.log("Delete " + this.massage)
        this.findServicePacName()
      }
      // ,
      // err => {
      //   console.log("Delete error")
      // }
    )
  }

}
