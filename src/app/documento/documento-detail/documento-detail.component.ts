import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Documento } from '../documento';
import { DocumentoService } from '../documento.service';

@Component({
  selector: 'app-documento-detail',
  templateUrl: './documento-detail.component.html',
  styleUrls: ['./documento-detail.component.css']
})
export class DocumentoDetailComponent implements OnInit {
  documentoId!: string;
  @Input() documentoDetail!:Documento
  constructor(
    private route: ActivatedRoute,
    private documentoService: DocumentoService
  ) { }
  getDocumento(){
    this.documentoService.getDocumento(this.documentoId).subscribe(Documento=>{
      this.documentoDetail = Documento;
    })
  }
  ngOnInit() {
    if(this.documentoDetail === undefined){
      this.documentoId = this.route.snapshot.paramMap.get('id')!
      if (this.documentoId) {
        this.getDocumento();
      }
    }
  }
}
