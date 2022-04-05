import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { APP_ACTION, APP_PERMISSIONS } from '@models/permission';
import { User, USER_LEVEL } from '@models/user';
import { APP_ROUTES } from '@pages/routes';
import { PermissionService } from '@services/permission';
import { UserService } from '@services/user/user.service';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

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

  currentUserPermisisons$!: Observable<Array<APP_ACTION>>;

  APP_ROUTES = APP_ROUTES;

  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  APP_ACTION = APP_ACTION;

  constructor(
    private permissionService: PermissionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadCurrentUser();
    this.loadCurrentUserPermisisons();
    this.loadUsers();
  }

  onLevelChanged(user: User, level: USER_LEVEL) {
    this.permissionService.setUserLevel(user, level).subscribe((res) => {
      console.log('res', res);
      this.refreshUser$.next(true);
    });
  }

  trackByUser(index: number, user: User) {
    return user.id;
  }

  private loadCurrentUser() {
    this.currentUser$ = this.userService.current$;
  }

  private loadCurrentUserPermisisons() {
    this.currentUserPermisisons$ = this.currentUser$.pipe(
      map((user) => (user?.level ? APP_PERMISSIONS[user?.level] : []))
    );
  }

  private loadUsers() {
    this.users$ = this.refreshUser$.pipe(
      switchMap(() => this.userService.list())
    );
  }
}
