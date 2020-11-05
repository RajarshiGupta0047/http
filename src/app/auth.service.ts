import { HttpInterceptor } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req,next){
        console.log('Request on its way!!');
        const modify=req.clone({headers:req.headers.append('Auth','Verify')});
        return next.handle(modify);
    }
}