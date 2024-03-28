import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mult',
    standalone: true
})

export class MultByPipe implements PipeTransform {
    transform(num: number, pow: number = 2): number {
        return num * pow;
    }
}