import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-pages-wrapper',
  templateUrl: './public-pages-wrapper.component.html',
  styleUrls: ['./public-pages-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPagesWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
