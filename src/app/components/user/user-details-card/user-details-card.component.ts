import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { APP_ACTION, APP_PERMISSIONS } from '@models/permission';
import { User, USER_LEVEL } from '@models/user';
import { map, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsCardComponent implements OnInit {
  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  APP_ACTION = APP_ACTION;

  currentUserPermisisons$!: Observable<Array<APP_ACTION>>;

  currentUser$ = new ReplaySubject<User | undefined>();

  @Input() user: User | undefined;

  @Input() set currentUser(v: User | undefined) {
    this.currentUser$.next(v);
  }

  @Output() levelChanged = new EventEmitter<USER_LEVEL>();

  constructor() {}

  ngOnInit() {
    this.loadCurrentUserPermisisons();
  }

  onLevelChanged(level: USER_LEVEL) {
    this.levelChanged.emit(level);
  }

  private loadCurrentUserPermisisons() {
    this.currentUserPermisisons$ = this.currentUser$.pipe(
      map((user) => (user?.level ? APP_PERMISSIONS[user?.level] : []))
    );
  }
}
