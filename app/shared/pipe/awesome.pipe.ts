/**
 * Created by qibo on 11/9/16.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "awesome"
})

export class AwesomePipe implements PipeTransform {

    transform(phrase: string) {
        return phrase ? '[Pipe Awesome!] ' + phrase : '';
    }

}