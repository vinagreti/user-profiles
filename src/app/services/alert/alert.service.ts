import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertConfig } from './alert.service.models';

const DEFAULT_DURATION = 3e3;

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert$ = new BehaviorSubject<AlertConfig | undefined>(undefined);

  private alertsMap: AlertConfig[] = [];

  constructor() {}

  alert(config: AlertConfig) {
    const finalConfig: AlertConfig = { color: 'default', ...config };
    this.alertsMap.push(finalConfig);
    if (!this.current) {
      this.showNext();
    }
  }

  private get current() {
    return this.alert$.value;
  }

  private showNext = () => {
    const next = this.alertsMap.shift();
    if (next) {
      next.next = this.showNext;
      this.alert$.next(next);
      const duration = next?.duration ?? DEFAULT_DURATION;
      this.scheduleNext(duration);
    } else {
      this.alert$.next(undefined);
    }
  };

  private scheduleNext(duration: number) {
    setTimeout(() => {
      if (this.alertsMap.length) {
        this.showNext();
      } else {
        this.alert$.next(undefined);
      }
    }, duration);
  }
}
