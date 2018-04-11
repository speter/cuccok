import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cucc } from '../cucc';
import { CuccService } from '../cucc.service';

@Component({
  selector: 'app-cucc',
  templateUrl: './cucc.component.html',
  styleUrls: ['./cucc.component.css']
})
export class CuccComponent implements OnInit {

  @Input() cucc: Cucc;

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
        cucc => this.cucc = cucc,
        err => console.error(err)
      );
    }
  }

  onReturn() {
    if (this.cucc.id) {
      this.router.navigateByUrl('/cuccok?highlighted=' + this.cucc.id);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onDelete() {
    console.log('onDelete');
    this.cuccService.deleteCucc(this.cucc.id).subscribe(
      data => this.router.navigateByUrl('/'),
      err => console.error(err)
    );
  }

  onSave() {
    console.log('onSave');
    console.log(this.cucc);
    if (this.cucc.id) {
      this.cuccService.updateCucc(this.cucc).subscribe(
        data => this.router.navigateByUrl('/cuccok?highlighted=' + this.cucc.id),
        err => console.error(err)
      );
    } else {
      this.cuccService.createCucc(this.cucc).subscribe(
        id => this.router.navigateByUrl('/cuccok?highlighted=' + id),
        err => console.error(err)
      );
    }
  }

}
