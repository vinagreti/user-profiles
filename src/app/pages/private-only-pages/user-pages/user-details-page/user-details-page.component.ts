import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, USER_LEVEL } from '@models/user';
import { PermissionService } from '@services/permission';
import { UserService } from '@services/user';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
  refreshUser$ = new BehaviorSubject(true);

  currentUser$!: Observable<User | undefined>;

  userId$!: Observable<string>;

  user$!: Observable<User>;

  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.connectToCurrentUserStream();
    this.connectToUserIdStream();
    this.connectToUserStream();
  }

  onLevelChanged(user: User, level: USER_LEVEL) {
    this.permissionService.setUserLevel(user, level).subscribe((res) => {
      this.refreshUser$.next(true);
    });
  }

  private connectToCurrentUserStream() {
    this.currentUser$ = this.userService.current$;
  }

  private connectToUserIdStream() {
    this.userId$ = this.route.params.pipe(map((params) => params['id']));
  }

  private connectToUserStream() {
    this.user$ = this.refreshUser$.pipe(
      switchMap(() =>
        this.userId$.pipe(switchMap((userId) => this.userService.get(userId)))
      )
    );
  }
}
