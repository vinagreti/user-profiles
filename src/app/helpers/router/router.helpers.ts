import { ActivatedRouteSnapshot } from '@angular/router';

export function getRouteChildrenData(snapshot: ActivatedRouteSnapshot): any {
  let data = { ...snapshot?.firstChild?.data };
  if (snapshot?.firstChild?.firstChild) {
    return { ...data, ...getRouteChildrenData(snapshot?.firstChild) };
  } else {
    return data;
  }
}
