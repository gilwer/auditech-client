import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
               columnDefs: ColDef[] = [
                       { field: 'url' },
                       { field: 'id' },
                       { field: 'html_url' },
                       { field: 'diff_url' },
                       { field: 'number' },
                       { field: 'state' },
                       { field: 'title' },
                       { field: 'body' },
                       { field: 'user' },
                       { field: 'created_at' },
                       { field: 'updated_at' },

                   ];


                    public defaultColDef: ColDef = {
                      sortable: true,
                      filter: true,
                    };


                    public rowData$!: Observable<any[]>;


                    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

                    constructor(private http: HttpClient) {}


                    onGridReady(params: GridReadyEvent) {
                      this.rowData$ = this.http
                        .get<any[]>('https://fastapiauditech-1-w4937746.deta.app/pull-request');

                    }



             }

