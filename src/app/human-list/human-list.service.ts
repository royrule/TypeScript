import { HUMANS } from './mocks';
import { Human } from './human.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HumanListService {

    private humanUrl= 'http://localhost:3000/human-list';
    constructor(private http: Http) { }


    getHumanList(): Observable<Human[]> {
        return this.http.get(this.humanUrl)
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );

    }

    updateHuman(human: Human): Observable<Human[]> {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers : headers });
        return this.http.put(`${this.humanUrl}/${human.id}`, human, options)
            .map( (res: Response) => res.json() )
           .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
}

