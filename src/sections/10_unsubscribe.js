import { print } from '..';
import { interval, timer, subscription } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

const source = interval(150);

/**
 * Manuális leiratkozás.
 */
const sub = source.subscribe((value) => {
    print(value);
    if (value >= 10 ) {
        sub.unsubscribe();
    }
});



/**
 * TakeWhile
 */
// const takeWhileExample = source.pipe(
//     takeWhile((value) => value <= 10)
// );

// takeWhileExample.subscribe(print);


/**
 * TakeUntil: amint a paraméterben átadott observable visszatér egy értékkel, automatikusan leiratkozik.
 */
// const takeUntilExample = source.pipe(
//     takeUntil(timer(2000))
// );

// takeUntilExample.subscribe(print);