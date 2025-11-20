import { HttpInterceptorFn } from '@angular/common/http';
import { env } from '../environments/env';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isAbsoluteHttpUrl = /^https?:\/\//i.test(req.url);
  const isOurApi = (!isAbsoluteHttpUrl) || req.url.startsWith(env.baseUrl);

  return next(isOurApi ? req.clone({ withCredentials: true }) : req);
};
