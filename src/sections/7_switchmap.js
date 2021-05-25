import { print } from '..';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

const user = of({ id: Math.random() });

// Addig nem hívhatjuk meg ezt a függvényt, míg az id nem áll rendelkezésre.
const fetchShoppingCart = (id) => {
    return of(`${id}'s shopping cart`);
}


/**
 * A rossz megközelítés...
 */
let items;
user.subscribe((user) => {
    fetchShoppingCart(user.id).subscribe((data) => {
        items = data;
        print(items);
    });
});


/**
 * A jó megközelítés! 👍
 */
// const shoppingCart = user.pipe(
//     switchMap((user) => {
//         return fetchShoppingCart(user.id);
//     })
// );

// shoppingCart.subscribe(print);