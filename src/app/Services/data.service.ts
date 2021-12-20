import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class DataService {

  constructor(public httpClient: HttpClient) {
  }

  get(APIPath: string) {
    return this.httpClient.get<any>(`${environment.apiEndPoint}${APIPath}`);
  }

  getWithParams(APIPath: string, params: any) {
    return this.httpClient.get<any>(`${environment.apiEndPoint}${APIPath}`, {params});
  }

  delete(APIPath: string, Key: any) {
    return this.httpClient.delete<any>(`${environment.apiEndPoint}${APIPath}${Key}`);
  }

  update(APIPath: string, OBJ: any) {
    return this.httpClient.put<any>(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }

  post(APIPath: string, OBJ: any) {
    return this.httpClient.post<any>(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }


  patch(APIPath: string, OBJ: any) {
    return this.httpClient.patch<any>(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }
}
