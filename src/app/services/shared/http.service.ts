import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class HttpService {

    readonly URL: string = 'http://192.168.0.28:4500/';
    
    constructor(protected http:HttpClient){}

}