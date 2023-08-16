import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() title: string = 'Angular';
  @Input() iconName: string | undefined;
  @Input() color: string = 'red';
  @Input() darkText: boolean | undefined = false;
  @Input() imgName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
