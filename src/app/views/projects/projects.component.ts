import { Component, OnInit } from '@angular/core';
import { getProjects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = getProjects();

  constructor() { }

  ngOnInit(): void { }
}
