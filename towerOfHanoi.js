function towerOfHanoi(n, a, b, c) {
    if (n == 0) {
        return 0;
    }

    else {
        towerOfHanoi(n - 1, a, c, b)
        console.log("Moved disk " + n + " from rod " + a + " to rod " + b)
        towerOfHanoi(n - 1, c, b, a)
    }
}

let n = 1;

towerOfHanoi(n, 'a', 'b', 'c')