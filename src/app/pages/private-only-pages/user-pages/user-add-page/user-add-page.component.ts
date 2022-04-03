import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from '@models/user';
import { APP_ROUTES } from '@pages/routes';
import { UserService } from '@services/user';

@Component({
  selector: 'app-user-add-page',
  templateUrl: './user-add-page.component.html',
  styleUrls: ['./user-add-page.component.scss'],
})
export class UserAddPageComponent {
  newUser: NewUser = { level: '' } as any as NewUser;

  constructor(private router: Router, private userService: UserService) {}

  addUser(newUser: NewUser) {
    this.userService.create(newUser).subscribe((user) => {
      this.router.navigate([APP_ROUTES.privateOnly.user.dashboard, user.id]);
    });
  }
}
