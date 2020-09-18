import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Items } from '../../model/items';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  items: Items[] = [];

  search: any;
  pages: number = 0;
  offset: number = 0;
  id:string;
  disabledPrev: boolean = true;
  disabledNext: boolean = false;


  constructor(private itemService: ItemsService, private router: Router) {}

  ngOnInit() {
    this.pages = 0;
    this.offset = 0;
  }

  GenerarItems(): void {
    this.items = [];
    this.pages = 0;
    this.offset = 0;
    console.log(this.search);
    this.itemService.getItems(this.search).subscribe((data) => {
      console.log(data);
      this.items = data.results;
      console.log(this.items);

    });
  }

  limpiar(): void {
    this.search = ' ';
    this.items = [];

    this.pages = 0;
    this.offset = 0;
    this.disabledPrev = true;
  }

  nextPage() {
    this.pages = this.pages + 1;
    this.disabledPrev = false;
    this.offset = this.offset + 50;
    if (this.offset == 1000) {
      this.disabledNext = true;
    }
    this.itemService
      .getItems(`${this.search}&offset=${this.offset}`)
      .subscribe((data) => {
        console.log(data);
        this.items = data.results;
        console.log(this.items);
      });
  }
  prevPage() {
    this.offset = this.offset - 50;
    if (this.offset < 1000) {
      this.disabledNext = false;
    }
    console.log(this.offset);
    this.pages = this.pages - 1;
    if (this.pages == 0) {
      this.disabledPrev = true;
    }
    this.itemService
      .getItems(`${this.search}&offset=${this.offset}`)
      .subscribe((data) => {
        console.log(data);
        this.items = data.results;
        console.log(this.items);
      });
  }
}
