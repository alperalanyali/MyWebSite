import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { SkillModel } from './models/skill.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About';
  constructor(private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  skills:SkillModel[] = [
    {
      language:"HTML"
    },
    {
      language:"CSS"
    },
    {
      language:"Javascript"
    },
    {
      language:"C#"
    },
    {
      language:"Entity Framework"
    },
    {
      language:"SQL"
    },
    {
      language:"React"
    },
    {
      language:"Angular"
    },
    {
      language:"GIT"
    },
    {
      language:"Github"
    },
    {
      language:"Express"
    },
    {
      language:"Node.js Basics"
    },
    {
      language:"Python Basics"
    }
  ]
}
