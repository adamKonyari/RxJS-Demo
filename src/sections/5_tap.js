import { print } from '..';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const source = of('Szallas');

const tapped = source.pipe(
    tap(print),
    map((value) => value.toUpperCase()),
    tap(print),
);

tapped.subscribe();