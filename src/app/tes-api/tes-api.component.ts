import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'ApiComponent',
  templateUrl: './tes-api.component.html',
  styleUrls: ['./tes-api.component.scss'],
})
export class TesApiComponent implements OnInit {
  public content: any = {};
  private searchContent: ApiService;

  constructor(getApi: ApiService) {
    this.searchContent = getApi;
  }

  ngOnInit(): void {
    this.searchContent.getApi().subscribe((data: any) => {
      this.content = data;
      return console.log(this.content);
    });
  }
}
