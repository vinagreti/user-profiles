import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-only-pages',
  templateUrl: './public-only-pages.component.html',
  styleUrls: ['./public-only-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicOnlyPagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
