import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../service/data/service-list.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  // selectedFile: ImageSnippet;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(
    private serviceList: ServiceListService,
  ) { }


  ngOnInit() {
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    // const uploadImageData = new FormData();
    // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);


    // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);
    this.serviceList.uploadImage(uploadImageData)
      .subscribe(
        (response) => {
          console.log("upload")
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        },
        err => {
          console.log(err);
        },
        () => {
          console.log("complete");
        }
      );
  }

   //Gets called when the user clicks on retieve image button to get the image from back end
   getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.serviceList.getImage(this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
      }

}
