import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUser, USER_LEVEL } from '@models/user';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  USER_LEVEL = USER_LEVEL;

  USER_LEVELS = Object.values(USER_LEVEL);

  showPassword$ = new BehaviorSubject(false);

  valid$!: Observable<boolean>;

  @Input() newUser: NewUser = {} as NewUser;

  @ViewChild(NgForm, { static: true }) userForm!: NgForm;

  showPassword = false;

  constructor() {}

  ngOnInit() {
    this.valid$ = this.userForm.statusChanges!.pipe(
      map((status) => {
        return !!this.userForm.valid;
      })
    );
  }

  onShowPasswordCheckStatusChanged($event: any) {
    const checked = $event.target.checked;
    this.showPassword = checked;
    this.showPassword$.next(checked);
  }
}
