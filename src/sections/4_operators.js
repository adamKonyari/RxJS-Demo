import { print } from '..';
import { from } from 'rxjs';
import { map, filter, first, take, scan } from 'rxjs/operators';

/**
 * Pipe és operátorok
 */
const source = from([1,2,3,4,5,6,7,8,9,10]);

// A műveleti sorrend számít!
const modified = source.pipe(
    map((value) => Math.pow(value, 2)), // map: az input érték transzformálása egy új output értékké
    scan((acc, value) => acc + value), // scan: akkumulált érték kiszámolása
    filter((value) => value > 10), // filter: az értékek szűrése meghatározott feltétel alapján
    take(3) // take: a paraméterben meghatározott számú értékek kibocsátása után, az observable automatikusan lezárul.
);

modified.subscribe(print);