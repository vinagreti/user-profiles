import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
