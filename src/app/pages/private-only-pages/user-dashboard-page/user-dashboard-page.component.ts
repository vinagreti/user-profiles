import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { UserService } from '@services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDashboardPageComponent implements OnInit {
  users$!: Observable<User[]>;

  currentUser$!: Observable<User | undefined>;

  USER_LEVEL = Object.values(USER_LEVEL);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser();
    this.loadUsers();
  }

  onLevelChanged(user: User, level: USER_LEVEL) {
    this.userService.setUserLevel(user, level);
  }

  private loadUser() {
    this.currentUser$ = this.userService.current$;
  }

  private loadUsers() {
    this.users$ = this.userService.list();
  }
}
