import { Component, Input, OnInit } from '@angular/core';
import { ConductorDetail } from '../conductor-detail';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {
  @Input() conductorDetail!: ConductorDetail;
  activate = true;
  constructor() { }

  ngOnInit() {
  }

}
