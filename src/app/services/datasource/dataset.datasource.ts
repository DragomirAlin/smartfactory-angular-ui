import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";

import {catchError, finalize} from "rxjs/operators";
import {AcquisitionService, Data} from "../api";


export class DatasetDatasource implements DataSource<Data> {
  private dataSubject = new BehaviorSubject<Data[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private acquisitionService: AcquisitionService) {

  }

  loadDataset() {
    this.loadingSubject.next(true);

    this.acquisitionService.getData().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lessons => this.dataSubject.next(lessons));

  }

  connect(collectionViewer: CollectionViewer): Observable<Data[]> {
    console.log("Connecting data source");
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

}

