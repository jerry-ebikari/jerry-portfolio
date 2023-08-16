import { Component, OnInit } from '@angular/core';
interface card {
  title: string,
  iconName?: string,
  color: string,
  darkText?: boolean,
  imgName?: string
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
    {
      title: 'Git',
      iconName: 'github',
      color: '#0e2535'
    },
    {
      title: 'Node Js',
      imgName: 'node.jpeg',
      color: '#83cd2a',
      darkText: true
    },
    {
      title: 'MongoDB',
      imgName: 'mongodb.svg',
      color: '#04ed65',
      darkText: true
    },
    {
      title: 'Java',
      imgName: 'java.png',
      color: '#e96e00'
    },
    {
      title: 'MySQL',
      imgName: 'mysql.svg',
      color: '#01678d'
    },
    {
      title: 'PostgreSQL',
      imgName: 'postgresql.svg',
      color: '#69778f'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
