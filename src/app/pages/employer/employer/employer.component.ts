import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatasService } from 'src/app/services/datas.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent {
  constructor(private dataService: DatasService, private activatedRouter: ActivatedRoute, private router: Router) {}

  public reference!:any;
  public selectedId: string | number | null = null;
  ngOnInit(): void {
    this.selectedId = this.activatedRouter.snapshot.paramMap.get('id');
    this.dataService.getReferences().subscribe(references => {
      const refer = references.find(x => x.id.toString() === this.selectedId)!;
      if (refer) {
        this.reference = refer;
      }
    });
  }

  goBackToCV(): void {
    this.router.navigate(['/cv']);
  }
}
