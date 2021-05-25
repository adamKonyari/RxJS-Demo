import { print } from '..';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime, bufferCount } from 'rxjs/operators';

const event = fromEvent(document, 'mousemove');

// event.subscribe(print);

const debounced = event.pipe(debounceTime(300));

// debounced.subscribe(print);

const throttled = event.pipe(throttleTime(300));

// throttled.subscribe(print);

const buffered = event.pipe(bufferCount(20));

// buffered.subscribe(print);