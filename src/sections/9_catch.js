import { print } from '..';
import { Subject } from 'rxjs';

const subject = new Subject();

/**
 * Hiba elkapása és lekezelése.
 */
subject.subscribe({
    next: (value) => {
        print(value)
    },
    error: (errorValue) => {
        print(errorValue)
    }
});

subject.next('szallas.hu');
subject.error('booking.com');