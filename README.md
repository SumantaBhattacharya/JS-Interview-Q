# ***50 JavaScript Interview Questions Solved in 1 Hour***

[![50 JavaScript Interview Questions Solved in 1 Hour](https://img.youtube.com/vi/qTszFuibDEg/maxresdefault.jpg)](https://youtu.be/qTszFuibDEg) 

# ***Big O Notation***

- ***Big O notation*** *is used to clarify algorithms based on how fast they grow or decline.* ***Big O notation*** *is used to analyze the effeciency of an algorithm as its input approaches infinity, which means that as the size of an input to the algorithm grows, how drastically do the space or time requirements grow with it.* 

  - ***For example***, *let's say that we have a dentist and she takes 30 minutes to treat one patient, As her line of patients increases, the time that it takes for her to treat all of the patients will scale linearly with the number of patients waiting in the line. This is because it always takes her a constant amount of time to treat each individual patient supoose its 30 minutes. This would give us general understanding how how a dentist will take to treat 20 or 30 patients. This is because since we know that the dentist takes a constant amount of time, which is 30 minutes to treat each patient, we can always calculate the time it would take for the dentist to treat any number of patients by multiplying the number patients with the number of time it takes for her to treat an individual person in this case, which is 30 with this in mind we can calculate her efficiency linear. Or in Big O terms big O of n, where n is equal to the number of patients. the time that it would take her work to finsh would scale linearly or proportionally with the number of patients*.

`A constant is any step that doesnt scale with the input to the function.`
> constants are ignored due to getting less priority and gets elimated as its less dominant
>  as a functions, input moves towards infinite, constant become less and less significant.

> *Big O of One is for constant algorithms*

![Types of Order of Growth](https://learningmonkey.in/wp-content/uploads/2022/07/Types-of-Order-of-Growth-of-an-Algorithm.png)

```
Order of Growth   |     Description
------------------------------------
O(n!)             |     Factorial
```

- *when evaluating aan algorithm efficientcy, we must takes into consideration the efficiency of each step within the algorithm, we then find the highest order step, or the step that has the worst performance, and priortize it over of the better performing steps. steps that are constant, or that are O(1) or as good as it gets in terms of efficiency. So we always ignore them, unless the entirety of the function is constant, or O(1). And in that case, we would categorise the entire function as constant or O(1).* 

### ***Dry run of cube function O(n^3) cubic***

```

So for this first iteration of this top level for loop, i is going to  be equal to zero. 
then for this nested for loop, J is also going to be equal to zero. 
And for K as well 

since we continue with K until K is no longer less than n, i right now is equal to zero

i = 0, j = 0, k = 0  k increments 1
i = 0, j = 0, k = 1  k increments 1
i = 0, j = 0, k = 2  k increments 1
i = 0, j = 0, k = 3  k increments 1
i = 0, j = 0, k = 4  k always have to be less than 4 loop ends here for the first j iteration j gets incremented by 1

i = 0, j = 1, k = 0  k increments 1
i = 0, j = 1, k = 1  k increments 1
i = 0, j = 1, k = 2  k increments 1
i = 0, j = 1, k = 3  k increments 1
i = 0, j = 1, k = 4  k always have to be less than 4 loop ends here for the first j iteration j gets incremented by 1

i = 0, j = 2, k = 0  k increments 1
i = 0, j = 2, k = 1  k increments 1
i = 0, j = 2, k = 2  k increments 1
i = 0, j = 2, k = 3  k increments 1
i = 0, j = 2, k = 4  k always have to be less than 4 loop ends here for the first j iteration j gets incremented by 1

i = 0, j = 3, k = 0  k increments 1
i = 0, j = 3, k = 1  k increments 1
i = 0, j = 3, k = 2  k increments 1
i = 0, j = 3, k = 3  k increments 1
i = 0, j = 3, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 0, j = 4 j always have to be less than loop 4 so loop ends here for the first i iteration. i gets incremented by 1

i = 1, j = 0, k = 0  k increments 1
i = 1, j = 0, k = 1  k increments 1
i = 1, j = 0, k = 2  k increments 1
i = 1, j = 0, k = 3  k increments 1
i = 1, j = 0, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 1, j = 1, k = 0  k increments 1
i = 1, j = 1, k = 1  k increments 1
i = 1, j = 1, k = 2  k increments 1
i = 1, j = 1, k = 3  k increments 1
i = 1, j = 1, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1


i = 1, j = 2, k = 0  k increments 1
i = 1, j = 2, k = 1  k increments 1
i = 1, j = 2, k = 2  k increments 1
i = 1, j = 2, k = 3  k increments 1
i = 1, j = 2, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1


i = 1, j = 2, k = 0  k increments 1
i = 1, j = 2, k = 1  k increments 1
i = 1, j = 2, k = 2  k increments 1
i = 1, j = 2, k = 3  k increments 1
i = 1, j = 2, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1


i = 1, j = 3, k = 0  k increments 1
i = 1, j = 3, k = 1  k increments 1
i = 1, j = 3, k = 2  k increments 1
i = 1, j = 3, k = 3  k increments 1
i = 1, j = 3, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 1, j = 4 j always have to be less than loop 4 so loop ends here for the second i iteration. i gets incremented by 1

i = 2, j = 0, k = 0  k increments 1
i = 2, j = 0, k = 1  k increments 1
i = 2, j = 0, k = 2  k increments 1
i = 2, j = 0, k = 3  k increments 1
i = 2, j = 0, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 2, j = 1, k = 0  k increments 1
i = 2, j = 1, k = 1  k increments 1
i = 2, j = 1, k = 2  k increments 1
i = 2, j = 1, k = 3  k increments 1
i = 2, j = 1, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 2, j = 2, k = 0  k increments 1
i = 2, j = 2, k = 1  k increments 1
i = 2, j = 2, k = 2  k increments 1
i = 2, j = 2, k = 3  k increments 1
i = 2, j = 2, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 2, j = 3, k = 0  k increments 1
i = 2, j = 3, k = 1  k increments 1
i = 2, j = 3, k = 2  k increments 1
i = 2, j = 3, k = 3  k increments 1
i = 2, j = 3, k = 4  k always have to be less than loop 4 ends here for the first j iteration j gets incremented by 1

i = 2, j = 4 j always have to be less than loop 4 so loop ends here for the second i iteration. i gets incremented by 1

so on and so on!
```

# ***O(log n)***
*Simply put a logarithm is the power that a number needs to be raised to get some other number.*
*number^number = some number - 2^3 = 2*2*2 = 8 - log2(8) log base 2 of 8? = 3*
*In computer science unless specified otherwise, we can always assume that the number that we want to raise to sum power is two.* 

> *Devision is the inverse of multiplication*

#### ***Learnings***
- count++ (post-increment): Returns the value first, then increments.
- ++count (pre-increment): Increments first, then returns the value.

#### ***Visited links***
- *https://downsub.com/*