import { Observable } from "rxjs";
export declare abstract class AuthAPI {
    abstract login(data: any): Observable<any>;
    abstract register(data: any): Observable<any>;
}
