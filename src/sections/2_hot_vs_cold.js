import { print } from '..';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

/**
 * Cold observable: az adat a feliratkozás pillanatában jön létre, így különbözik.
 */
const cold = Observable.create((observer) => {
    observer.next(Math.random());
});

cold.subscribe(print);
cold.subscribe(print);







/**
 * Hot observable: A shareReplay operator casheli a legutúbb kibocsátott értéket.
 */
// const hot = cold.pipe(shareReplay(1));
// hot.subscribe(print);
// hot.subscribe(print);








/**
 * Hot observable: az adat a feliratkozástól függetlenül jön létre.
 */
// const data = 'szallas';
// const hot2 = Observable.create(subscriber => {
//     subscriber.next(data);
// });
// hot2.subscribe(print);
