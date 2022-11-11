import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('req onn way');
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'xyz')});
    return next.handle(modifiedReq).pipe(tap(event => {
      if(event.type === HttpEventType.Response){
        console.log('response arrived');
        console.log(event.body);
      }
    }));
  }

}