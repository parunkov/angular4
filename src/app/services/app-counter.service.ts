import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
    providedIn: 'root'
})

export class AppCounterService {
    constructor(private logService: LogService) {}
    counter = 0
    increase() {
        this.logService.log('increase ...')
        this.counter++
    }
    decrease() {
        this.logService.log('decrease...')
        this.counter--
    }
}