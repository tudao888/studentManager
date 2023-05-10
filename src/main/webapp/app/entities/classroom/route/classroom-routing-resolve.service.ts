import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IClassroom } from '../classroom.model';
import { ClassroomService } from '../service/classroom.service';

@Injectable({ providedIn: 'root' })
export class ClassroomRoutingResolveService implements Resolve<IClassroom | null> {
  constructor(protected service: ClassroomService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IClassroom | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((classroom: HttpResponse<IClassroom>) => {
          if (classroom.body) {
            return of(classroom.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
