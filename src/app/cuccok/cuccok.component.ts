import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cucc } from '../cucc';
import { CuccService } from '../cucc.service';

@Component({
  selector: 'app-cuccok',
  templateUrl: './cuccok.component.html',
  styleUrls: ['./cuccok.component.css']
})
export class CuccokComponent implements OnInit {

  private _cuccok: Cucc[];
  hoveredId: string;
  highlightedId: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cuccService: CuccService
  ) {
    this.highlightedId = this.activatedRoute.snapshot.queryParamMap.get('highlighted');
  }

  ngOnInit() {
    this.retrieveCuccok();
  }

  onSelect(cucc: Cucc): void {
    this.router.navigateByUrl('/cucc/' + cucc.id);
  }

  set cuccok(cuccok: Cucc[]) {
    cuccok.sort(
      function(c1, c2: Cucc): number {
        const key1 = c1.rekesz + '\0' + (c1.elteve ? c1.elteve : '') + '\0' + c1.megnevezes;
        const key2 = c2.rekesz + '\0' + (c2.elteve ? c2.elteve : '') + '\0' + c2.megnevezes;
        if (key1 < key2) {
          return -1;
        } else {
          return 1;
        }
      }
    );
    this._cuccok = cuccok;
  }

  get cuccok(): Cucc[] {
    return this._cuccok;
  }

  retrieveCuccok(): void {
    this.cuccService.getCuccok()
        .subscribe(
          cuccok => this.cuccok = cuccok,
          err => console.error(err));
  }

}
