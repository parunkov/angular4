import { HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    console.log('Intercept request: ', req);

    const cloned = req.clone({
        headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    });

    return next(cloned).pipe(
        tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Interceptor response: ', event);
            }
        })
    );
}