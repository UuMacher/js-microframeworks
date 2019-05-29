/** Standard JavaScript **/
let a = 2;
let b = 2 * a; // -> 4

// Updating a won't update b
a = 5; // b != 10, still 4

/** Svelte **/
let a = 2;
$: b = 2 * a; // -> 4

a = 5; // b = 10