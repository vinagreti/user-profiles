import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { NavDirective } from '@components/nav/nav.directive';
import { AlertService } from '@services/alert/alert.service';
import { UserService } from '@services/user';
import { BehaviorSubject, filter, map, Subscription } from 'rxjs';

const maxMobileWidth = 799;
const minDesktopWidth = maxMobileWidth + 1;
const windowSize = window?.innerWidth ?? minDesktopWidth;

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent implements OnDestroy {
  mobile = windowSize < minDesktopWidth;

  showMenu$ = new BehaviorSubject<boolean>(!this.mobile);

  showBackButton$ = new BehaviorSubject<boolean>(false);

  private subscriptions = new Subscription();

  @ContentChild(NavDirective, { static: false }) nav?: NavDirective;

  constructor(
    public alertService: AlertService,
    public userService: UserService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.watchRouteDataAnShowBackButtonAfterNavigated();
    this.watchRouteAndHideMenuOnMobileAfterNavigated();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  toggleMenu() {
    if (this.showMenu$.value) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  private watchRouteDataAnShowBackButtonAfterNavigated = () => {
    const subscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => {
          const routeData = this.getChildrenData(this.route.snapshot);
          return routeData.backButton;
        })
      )
      .subscribe((backButton) => {
        this.showBackButton$.next(backButton);
      });
    this.subscriptions.add(subscription);
  };

  private watchRouteAndHideMenuOnMobileAfterNavigated = () => {
    const subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.mobile) {
          this.hideMenu();
        }
      });
    this.subscriptions.add(subscription);
  };

  private getChildrenData(snapshot: ActivatedRouteSnapshot): any {
    let data = { ...snapshot?.firstChild?.data };
    if (snapshot?.firstChild?.firstChild) {
      return { ...data, ...this.getChildrenData(snapshot?.firstChild) };
    } else {
      return data;
    }
  }

  private hideMenu() {
    this.showMenu$.next(false);
  }

  private showMenu() {
    this.showMenu$.next(true);
  }
}
