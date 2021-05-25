import { print } from '..';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * subject: A stream elfogad új értékeket, de csak miután létrejött egy feliratkozás.
 */
const subject = new Subject();

subject.subscribe(print);

subject.next('Hello');
subject.next('World');

// subject.subscribe(print);

subject.next('Szallas');











/**
 * Behavior Subject: legutolsó értéket elcasheli, így az minden feliratkozó számára elérhető.
 */
// const behaviorSubject = new BehaviorSubject('Szallas');

// behaviorSubject.subscribe(print);

// behaviorSubject.next('.hu');

// behaviorSubject.subscribe(print);