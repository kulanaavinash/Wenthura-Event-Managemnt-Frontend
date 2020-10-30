import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  loadServices(packagesType){
    if(packagesType==="platinum"){
      this.router.navigate(['service',packagesType])
    }else if(packagesType==="gold"){
      this.router.navigate(['service',packagesType])
    }else if(packagesType==="silver"){
      this.router.navigate(['service',packagesType])
    }
  }
}
