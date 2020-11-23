import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { User } from './../models/user';

import { RestApiService } from './../services/rest-api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  // Fields

  public pageSizeOptions: number[] = [5, 10, 20];
  private data: User[] = [];
  public cols: string[] = ['id', 'name', 'email', 'website'];
  public dataSource = new MatTableDataSource<User>(this.data);

  @ViewChild (MatSort, { static: true })
  private sort: MatSort;

  @ViewChild (MatPaginator, { static: true })
  private paginator: MatPaginator;

  private subscription$: Subscription;

  // Constructors

  constructor(private restApiService: RestApiService) { }

  // Life Cycle Hooks

  ngOnInit() {
    this.subscription$ = this.restApiService.getUsers ().subscribe (
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
    this.subscription$.unsubscribe ();
  }
}
