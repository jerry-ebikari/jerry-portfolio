import { Component, OnInit } from '@angular/core';
interface card {
  title: string,
  iconName: string,
  color: string,
  darkText?: boolean
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  cards: card[] = [
    {
      title: 'HTML5',
      iconName: 'html5',
      color: '#dd4b24'
    },
    {
      title: 'CSS3',
      iconName: 'css3 alternate',
      color: '#254bdc'
    },
    {
      title: 'SCSS',
      iconName: 'sass',
      color: '#c66294'
    },
    {
      title: 'JavaScript',
      iconName: 'js',
      color: '#f0d81e',
      darkText: true
    },
    {
      title: 'Angular',
      iconName: 'angular',
      color: '#c40030'
    },
    {
      title: 'React',
      iconName: 'react',
      color: '#5ed3f4',
      darkText: true
    },
    
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
