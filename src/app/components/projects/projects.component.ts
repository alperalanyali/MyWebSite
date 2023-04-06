import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProjectModel } from './models/project.model';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = 'Projects';
  constructor(private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
  projects:ProjectModel[]=[
    {
      name:"E-commerce",
      imageUrl:"../../../assets/images/eticaret.jpg",
      description:"Developing By Angular and C# ",
      path:"https://alpereticaret.ecnorow.com",
      isRouterLink : false
    },
    {
      name:"Weather App",
      imageUrl:"../../assets/images/weather-app.jpeg",
      description:"Developing by Angular and using the weather api",
      path:"weatherapp",
      isRouterLink: true
    },
    {
      name:"Music Player",
      imageUrl:"../../../assets/images/musicplayer.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/Music%20Player/index.html",
      isRouterLink : false
    },
    {
      name:"Dictionary App",
      imageUrl:"../../../assets/images/dictionaryApp.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/Dictionary%20App/index.html",
      isRouterLink : false
    },
    {
      name:"Quiz App",
      imageUrl:"../../../assets/images/Quiz.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/Quiz%20App/index.html",
      isRouterLink : false
    },
    {
      name:"Sortable Game",
      imageUrl:"../../../assets/images/SortableGame.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/SortableList%20App/index.html",
      isRouterLink : false
    },
    {
      name:"Calculator",
      imageUrl:"../../../assets/images/calculator.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/Calculator/calculator.html",
      isRouterLink : false
    },
    

    {
      name:"My Book List",
      imageUrl:"../../../assets/images/MyBookList.jpeg",
      description:"Developing by HTML,CSS and Javascript",
      path:"https://alperalanyali.github.io/projects/BookList%20App/index.html",
      isRouterLink : false
    }
    
    
  ]
}
