import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backlog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.scss']
})
export class BacklogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
