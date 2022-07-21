import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from "../../environments/environment";


export abstract class AbstractService {

  public resourceUrl: string;
  public entity: string;
  authHeader = {
    Authorization: environment.token
  }

  protected constructor(protected http: HttpClient,
                        private basePath: string,
                        entity: string) {
    this.resourceUrl = environment.backUrl + basePath;
    this.entity = entity;
  }

  create(entity: any): Observable<any> {
    return this.http.post<any>(this.resourceUrl, entity, {headers: this.authHeader}).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al crear ' + this.entity)
      })
    )
  }

  update(entity: any): Observable<any> {
    return this.http.put<any>(this.resourceUrl, entity, {headers: this.authHeader}).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al actualizar ' + this.entity)
      })
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.resourceUrl + "/" + id, {headers: this.authHeader}).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al eliminar ' + this.entity)
      })
    )
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.resourceUrl, {headers: this.authHeader}).pipe(
      catchError(err => {
        console.log('Ocurrio un error', err)
        return throwError(() => 'Ocurrio un error');
      }),
    );
  }

  findOne(id: string): Observable<any> {
    return this.http.get<any>(this.resourceUrl + '/' + id, {headers: this.authHeader}).pipe(
      catchError(err => {
        console.log('Ocurrio un error', err)
        return throwError(() => this.entity + ' no existe');
      }),);
  }

}
