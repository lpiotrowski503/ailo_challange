import { AdminService } from './../admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public merchants$: Observable<any>;

  constructor(private admin: AdminService) {
    this.merchants$ = this.admin.getMerchants();
  }

  ngOnInit(): void {
    console.log('init');
  }
}
