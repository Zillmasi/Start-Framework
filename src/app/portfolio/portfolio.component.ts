import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Iimages {
  imagePath: string;
}
interface image{
  imagePath: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  
  
  iamges:Iimages[]=[
    {imagePath:"images/poert1.png"},
    {imagePath:"images/port2.png"},
    {imagePath:"images/port3.png"},
    {imagePath:"images/poert1.png"},
    {imagePath:"images/port2.png"},
    {imagePath:"images/port3.png"},
  ]

  currentImage:image={imagePath:"images/poert1.png"};
  showImg(image:image):void{
    this.currentImage=image;
  }


  displayNone: boolean = true;

  displayBlock(): boolean {
    this.displayNone = false;
    return this.displayNone;
  }
  displayNonee(): boolean {
    this.displayNone = true;
    return this.displayNone;
  }
}
