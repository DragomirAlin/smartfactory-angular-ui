import {Component, OnInit} from '@angular/core';
import {AcquisitionService, Data} from "../../services/api";

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {
  dataset: Data[] = [];
  displayedColumns = ["topic", "payload", "metadata"];

  constructor(private acquisitionService: AcquisitionService) {
  }

  ngOnInit(): void {
    this.acquisitionService.getData().subscribe((response => this.dataset = response))
  }

}
