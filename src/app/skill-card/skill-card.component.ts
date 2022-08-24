import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() title: string = 'Angular';
  @Input() iconName: string = 'angular';
  @Input() color: string = 'red';
  @Input() darkText: boolean | undefined = false;
  constructor() { }

  ngOnInit(): void {
  }

}
