import { print } from '..';
import { Observable, combineLatest, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

const random = Observable.create((observer) => {
    observer.next(Math.random());
});

const delayed = random.pipe(delay(1000));



/**
 * Megvárja a legutóbb kibocsátott értéket, majd továbbítja az egész tömböt.
 */
const combined = combineLatest([
    delayed,
    random,
    random,
]);

// combined.subscribe(print);


/**
 * Azonnal továbbítja a kibocsátott értékeket.
 */
const merged = merge(
    delayed,
    random,
    random,
);

// merged.subscribe(print);