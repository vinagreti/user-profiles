import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User, USER_LEVEL } from '@models/user';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsCardComponent {
  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  @Input() user: User | undefined;

  @Input() currentUser: User | undefined;

  @Output() levelChanged = new EventEmitter<USER_LEVEL>();

  constructor() {}

  onLevelChanged(level: USER_LEVEL) {
    this.levelChanged.emit(level);
  }
}
