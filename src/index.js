import './sections/1_create';
// import './sections/2_hot_vs_cold';
// import './sections/3_subjects';
// import './sections/4_operators';
// import './sections/5_tap';
// import './sections/6_backpressure';
// import './sections/7_switchmap';
// import './sections/8_combine';
// import './sections/9_catch';
// import './sections/10_unsubscribe';



/**
 * Segéd method, ami csak a megjelenítésért felelős.
 */
export function print(val) {
    let pEl = document.createElement('p');
    pEl.innerText = val;
    document.body.appendChild(pEl);
    console.log(val);
}