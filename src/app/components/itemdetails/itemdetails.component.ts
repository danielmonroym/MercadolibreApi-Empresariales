import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imgs } from 'src/app/model/imgs';
import { ItemDetails } from 'src/app/model/itemdetails';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/services/items.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {
  id: string;
  itemdetail: ItemDetails;
  img: any[];
  constructor(private route: ActivatedRoute, private itemService: ItemsService, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.itemDetails()
  }

  itemDetails(){
     this.itemService.getItemDetails(this.id).subscribe((data) => {
      console.log(data);
      this.itemdetail = data;
      this.img=data.pictures;
      if(this.img.length>8){
        this.img.length=this.img.length/8;
      }
      
      console.log(this.img);
      console.log(data.pictures);
      
     
  });
  

}

cancel() {
  this.location.back();
}
}
