import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDashboardPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
