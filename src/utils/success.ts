/* eslint-disable prettier/prettier */
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data, s) => {
        console.log();

        if (typeof data == 'string') {
          return data
        } else {
          return {
            data,
            code: 200,
            message: '请求成功',
          };
        }

      }),
    );
  }
}