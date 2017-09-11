import { HUMANS } from './mocks';
import { Human } from './human.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';

@Injectable()
export class HumanListService {

    constructor(private http: Http) { }


    getHumanList(): Observable<Human[]> {
        return this.http.get('http://localhost:3000/human-list')
            .map( (res: Response) => res.json() )
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
    updateItem(human: Human): Observable<Human[]> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers : headers });
        return this.http.put(`${this.humanUrl}/${human['id']}`, headers, options);
            .map( (res: Response) => res.json() )
           .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
}
