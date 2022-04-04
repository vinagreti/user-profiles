import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertService } from '@services/alert/alert.service';
import { UserService } from '@services/user';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
  constructor(
    public alertService: AlertService,
    public userService: UserService
  ) {}
}
