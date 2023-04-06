import {BrowserModule, bootstrapApplication} from '@angular/platform-browser'
import {HttpClientModule, provideHttpClient} from '@angular/common/http'

import { AppComponent } from './app/app.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { importProvidersFrom } from '@angular/core'

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      FormsModule,  
      RouterModule.forRoot([
        {
          path:"",
          loadComponent: ()=>import('./app/components/layout/layout.component').then(c => c.LayoutComponent),
          children:[
            {
              path:"",
              loadComponent: ()=>import('./app/components/home/home.component').then(c => c.HomeComponent)
            },
            {
              path:"about",
              loadComponent: ()=>import('./app/components/about/about.component').then(c =>c.AboutComponent)
            },
            {
              path:"projects",
              loadComponent: ()=>import('./app/components/projects/projects.component').then( c=> c.ProjectsComponent)
            }
          ]
        },
        {
          path:"weatherapp",
          loadComponent: ()=> import('./app/components/projects/weather-app/weather-app.component').then(c => c.WeatherAppComponent)
        }
    
      ])
      )
  ]
})