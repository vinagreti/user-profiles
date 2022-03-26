import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-only-pages',
  templateUrl: './private-only-pages.component.html',
  styleUrls: ['./private-only-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateOnlyPagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
