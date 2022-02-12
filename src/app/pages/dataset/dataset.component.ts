import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AcquisitionService, Data} from "../../services/api";
import {DatasetDatasource} from "../../services/datasource/dataset.datasource";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit, AfterViewInit {
  dataset: Data[] = [];
  // @ts-ignore
  dataSource: DatasetDatasource;
  displayedColumns = ["topic", "payload", "metadata"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  @ViewChild('input', { static: true }) input: ElementRef | undefined;


  constructor(private route: ActivatedRoute, private acquisitionService: AcquisitionService) {
  }

  ngOnInit(): void {
    this.dataSource = new DatasetDatasource(this.acquisitionService);
    this.dataSource.loadDataset();
  }

  ngAfterViewInit(): void {
  }

  loadingDatasetPage(){
    // @ts-ignore
    this.dataSource.loadDataset();
  }

}
