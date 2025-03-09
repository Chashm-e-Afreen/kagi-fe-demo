
# Table of Contents

1.  [KAGI Fe Demo](#org3446d5b)
    1.  [Task 1](#orgac9d3ce)
    2.  [Task 2](#org45b855f)



<a id="org3446d5b"></a>

# KAGI Fe Demo


<a id="orgac9d3ce"></a>

## Task 1

The two examples of the first task can be found in the Task1 directory. They can be launched in the browser of your choice. They use no JavaScript. For the second example
I tried to find a way which would allow me to show the &rsquo;Show More&rsquo; button based on whether the text within the element above contains more than 10 lines. That isn&rsquo;t possible.
So I had to rely on making each line of the text an individual element within the DOM to make it work.


<a id="org45b855f"></a>

## Task 2

A script for the second task can be found in the Task2 directory. It contains of four implementations of the court method with a benchmark. The third one was the fastest on my machine
( Ryzen 7 7700, 32 GB DDR5 6000C40 memory). It relies on the built in string split method a raw for loop. The first one is how I would code it in practice. I tried sorting the array and using a binary search in the 4th routine but that was consistently slower. Regular expressions are generally slower than array methods so I didn&rsquo;t bother with them.

