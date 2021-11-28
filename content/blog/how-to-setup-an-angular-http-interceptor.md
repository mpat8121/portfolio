---
path: setup-angular-http-interceptor
date: 2021-08-16T04:45:43.921Z
title: How to setup an Angular HTTP Interceptor
description: An HTTP interceptor is a piece of logic that is able to attach to a
  HTTP request or response. This logic can then modify the data being
  transferred.
categories: ["Angular", "Javascript", "HTTP"]
image: ../assets/angular-http-interceptor-feature.jpg
---
### What is an HTTP Interceptor?

Every HTTP transaction that occurs between the client and server of web applications has a request and a response.

The client requests something or sends something to the server. The server processes this and responds with a response.

HTTP Interceptors allow the client application to modify either (or both) the content of the request and response. For those familiar with Nodejs, the HTTP interceptor is not too dissimilar from Express middleware in that it acts as a middle-man to the requests.

### Common Uses

The most common use I come across in general development is to add JWT access tokens into the outgoing request headers for a server to validate with. Generally, this will mean accessing the JWT from wherever it is being stored (hopefully not local storage) and appending a new header value with the correct name for the server to accept, validate and continue with the request.

The other common use I have implemented is to add additional data into the response object. Generally, this will be a piece of information that is required for all responses to be processed by the client, but not actually data that needs to make the trip to and from the server. This could be a local user Id or email address, or some other display-only data.

### Adding the Interceptor

Assuming you already have an Angular app spun up, adding the interceptor itself is relatively trivial.

In my projects, I either create a new provider in a servers/providers folder or a separate folder just for the interceptor:

~/angular-app/src/app/services/http-interceptor.service.ts

or

~/angular-app/src/app/interceptors/http.interceptor.ts

But either way, the file needs to be a provider file as per Angular providers.

The implementation of this file at a base level is very simple. The service class must implement HttpInterceptor from the "@angular/common/http" part of the Angular framework. This brings in the requirement to have a function definition of intercept() which handles the request modification:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constrcutor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    let headers = request.headers.append('Content-Type', 'application/json');
    const requestClone = request.clone({
            headers
          });
    return next.handle(requestClone);
  }
}
```

In the above example, we're simply adding the Content-Type header to all outgoing requests.

The real magic is the request.clone() function. As it says, it creates a new copy of the outgoing request and allows us to modify it before using it as the outgoing request information.

In addition to the above file, in order for the interceptor to fire correctly, the Angular module needs to be updated to tell the app the interceptor exists. So, in the app.module.ts file you will need to add an additional provider:

```typescript
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [...],
  providers: [
    ...,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

That's all there is to it. The logic of the intercept function should do all the work required to modify the request.