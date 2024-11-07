import { Component, signal } from '@angular/core';
import { ViewModelEmployer } from 'src/app/models/vievmodel-employer';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  employers: ViewModelEmployer[] = [
    {
      id: 1,
      name: 'Tecvia GmbH',
      role: 'Frontend Developer',
      startDate: 'November 2023',
      endDate: 'Present',
      description: 'Developed user-friendly web applications using Angular and TypeScript, focusing on responsive design and performance optimization.',
    },
    {
      id: 2,
      name: 'SET Engineering,',
      role: 'Frontend Developer',
      startDate: 'Jan 2023',
      endDate: 'Mai 2023',
      description: 'Worked on various client projects, building and maintaining websites with a focus on UX/UI design principles and interactive elements.',
    },
    {
      id: 3,
      name: 'OrgaCard und Siemantel & Alt GmbH',
      role: 'Frontend Developer',
      startDate: 'Juni 2022',
      endDate: 'Dez 2022',
      description: 'Assisted in the development of internal tools, collaborated on project planning, and learned best practices in software engineering.',
    },
    {
      id: 4,
      name: 'Conos Facility Management',
      role: 'Property Manager',
      startDate: 'Okt 2016',
      endDate: 'Mar 2020',
      description: 'Oversaw property management operations, including site supervision, cleanliness inspections, recruitment and scheduling of staff, payroll preparation, and materials delivery. Responsible for staff planning and ensuring operational standards across multiple properties.',
    }
    
  ];

  public years = signal(2);
  constructor() {}

  ngOnInit(): void {}

  public showMoreInfo(index:any):void {
    console.warn('showMoreInfo', index);
  }
}
