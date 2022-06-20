import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[]=[];
    baseUrl="https://localhost:44341/Uploads/Images/"
  // baseUrl="C:\Users\Emin\Desktop\ReCapProject\ReCapProject\WebAPI\wwwroot\Uploads\Images"
  constructor(private carImageService:CarImageService,private activedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
        this.getCarImagesByCarId(params["carId"])
        console.log("buradayım")
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
      console.log(response.data)
    })
  }

  getActiveImageClass(carImage:CarImage){
    if (carImage===this.carImages[0]) {
      return "active"
    } else {
      return ""
    }
  }
}