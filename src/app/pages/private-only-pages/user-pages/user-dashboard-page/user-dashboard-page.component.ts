import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { APP_ROUTES } from '@pages/routes';
import { PermissionService } from '@services/permission';
import { UserService } from '@services/user/user.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDashboardPageComponent implements OnInit {
  refreshUser$ = new BehaviorSubject(true);

  users$!: Observable<User[]>;

  currentUser$!: Observable<User | undefined>;

  APP_ROUTES = APP_ROUTES;

  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  constructor(
    private permissionService: PermissionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadUser();
    this.loadUsers();
  }

  onLevelChanged(user: User, level: USER_LEVEL) {
    this.permissionService.setUserLevel(user, level).subscribe((res) => {
      console.log('res', res);
      this.refreshUser$.next(true);
    });
  }

  onAddNewUserClicked() {
    this.userService
      .create({
        name: 'name',
        level: USER_LEVEL.ADMIN,
        email: 'name@name.com',
        password: 'name',
      })
      .subscribe((res) => {
        this.refreshUser$.next(true);
      });
  }

  trackByUser(index: number, user: User) {
    return user.id;
  }

  private loadUser() {
    this.currentUser$ = this.userService.current$;
  }

  private loadUsers() {
    this.users$ = this.refreshUser$.pipe(
      switchMap(() => this.userService.list())
    );
  }
}
