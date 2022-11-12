import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";


export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('req outgoing in logging');
        return next.handle(req).pipe(tap(event => {
            if(event.type === HttpEventType.Response){
                console.log('incoming response in logging interceptor');
                
            }
        }));
    }

}
