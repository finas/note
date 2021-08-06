### Example
2.33

Integral Part
2 = (10) 2

Fractional Part
```
0.33 * 2 =>0.66 // take 0 and move .66 to next step

0.66 * 2 =>1.32 // take 1 and move .32 to next step

0.32 * 2 =>0.64 // take 0 and move .64 to next step

0.64 * 2 =>1.28 // take 1 and move .28 to next step

0.28 * 2 =>0.56 // take 0 and move .56 to next step

0.56 * 2 =>1.12 // take 1 and move .12 to next step

0.12 * 2 =>0.24 // take 0 and move .24 to next step

0.24 * 2 =>0.48 // take 0 and move .48 to next step

0.48 * 2 =>0.96 // take 0 and move .96 to next step

0.96 * 2 =>1.92 // take 1 and move .92 to next step

0.92 * 2 =>1.84 // take 1 and move .84 to next step

0.84 * 2 =>1.68 // take 1 and move .68 to next step

0.68 * 2 =>1.36 // take 0 and move .36 to next step

0.36 * 2 =>0.72 // take 0 and move .72 to next step

0.72 * 2 =>1.44 // take 1 and move .44 to next step

0.44 * 2 =>0.88 // take 0 and move .88 to next step

0.88 * 2 =>1.76 // take 1 and move .76 to next step

0.76 * 2 =>1.32 // take 1 and move .32 to next step
```

Here, the fractional part 0.32 which is repeating again.

And Some fractional part numbers will not end up with 1.0 with the above method.

In floating number storage, the computer will allocate 23 bits for the fractional part. So, it's enough to do the above method at max 23 times.


2.33 = `(10.010101000111001011) 2`

