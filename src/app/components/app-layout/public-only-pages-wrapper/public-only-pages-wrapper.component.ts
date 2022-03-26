import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-only-pages-wrapper',
  templateUrl: './public-only-pages-wrapper.component.html',
  styleUrls: ['./public-only-pages-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicOnlyPagesWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
