import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';
import { Moment } from 'moment';

import { Cucc } from '../cucc';
import { CuccService } from '../cucc.service';

@Component({
  selector: 'app-cucc',
  templateUrl: './cucc.component.html',
  styleUrls: ['./cucc.component.css']
})
export class CuccComponent implements OnInit {

  @Input() cucc: Cucc;
  @Input() _elteve: Moment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cuccService: CuccService
  ) { }

  ngOnInit() {
    this.retrieveCucc();
  }

  retrieveCucc() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'uj') {
      this.cucc = new Cucc();
    } else {
      this.cuccService.getCucc(id).subscribe(
        cucc => {
          this.cucc = cucc;
          this._elteve = cucc.elteve ? moment(cucc.elteve, 'YYYY-MM-DD') : null;
        },
        err => console.error(err)
      );
    }
  }

  onReturn() {
    if (this.cucc.id) {
      this.router.navigateByUrl('/cuccok#' + this.cucc.id);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onDelete() {
    this.cuccService.deleteCucc(this.cucc.id).subscribe(
      data => this.router.navigateByUrl('/'),
      err => console.error(err)
    );
  }

  onSave() {
    this.cucc.elteve = this._elteve ? this._elteve.format('YYYY-MM-DD') : null;
    if (this.cucc.id) {
      this.cuccService.updateCucc(this.cucc).subscribe(
        data => this.router.navigateByUrl('/cuccok#' + this.cucc.id),
        err => console.error(err)
      );
    } else {
      this.cuccService.createCucc(this.cucc).subscribe(
        id => this.router.navigateByUrl('/cuccok#' + id),
        err => console.error(err)
      );
    }
  }

}
