import { Component, OnInit } from '@angular/core';
import { getProjects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = getProjects();

  constructor() { }

  ngOnInit(): void { }
}
