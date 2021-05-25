import { print } from '..';

import {
    Observable,
    of,
    interval,
    fromEvent,
    from,
} from 'rxjs';


/**
 * Observable manuális létrehozása.
 */
const basic = Observable.create(observer => {
    observer.next('A');
    observer.next('B');
    // observer.complete(); // a stream lezárása
    observer.next('C');
    // setTimeout(() => { // aszinkron művelet az observablen belül.
    //     observer.next('D');
    // }, 2000);
    observer.next('E');
});

basic.subscribe(print);




/**
 * of: egy wrapper, ami bármilyen típust becsomagol egy observable-be.
 */
// const wrapped = of('szallas', ['pont', 'hu'], 2022, true, {fruit: 'apple'});
// wrapped.subscribe(print);





/**
 * from: array, promise vagy iterable típust fogad el.
 * Az elemek egyesével jelennek meg a stream-ben.
 */
// const iterable = from('szallas.hu');
// iterable.subscribe(print);




/**
 * fromEvent: Observable létrehozása DOM eventekre.
 */
// const event = fromEvent(document, 'click');
// event.subscribe(print);





/**
 * interval: az paraméterben meghatározott időtartam elteltével kibocsát egy számot.
 */
// const periodic = interval(500);
// periodic.subscribe(print);
