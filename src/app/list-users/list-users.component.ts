import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';

import { User } from './../models/user';

import { RestApiService } from './../services/rest-api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  // FIELDS

  private data: User[];
  public cols: string[] = ['id', 'name', 'email', 'website'];
  public dataSource = new MatTableDataSource<User>(this.data);
  @ViewChild (MatSort, { static: true }) sort: MatSort;
  @ViewChild (MatPaginator, { static: true }) paginator: MatPaginator;
  private subscribed: Subscription;
  // CONSTRUCTORS

  constructor(private restApiService: RestApiService) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.subscribed = this.restApiService.getUsers ().subscribe (
      response => {
        this.data = response;
        this.dataSource = new MatTableDataSource<User>(this.data);
        setTimeout (() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, 0);
      },
      error => { this.data = []; });
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe ();
  }
}
