#Grade Calculator

This is the first CMPT 276 assignment.
I have implemented a basic interface of the grade calculator.

The grade calculator consists of the following features:
- Mean of grades calculation
```
The sum of all grades divided by the total number of grades

   A1 70/100, A2 20/80, A3 10/10:
   (0.7 + 0.25 + 1.0)/3 = 0.65 -> 65/100

```
- Weighted grades calculation
```
Each grade item can be given a weight, which is then used in the arithmetic 
mean aggregation to influence the importance of each item in the overall mean.
In simple terms, the category "total" will be equal to the sum of the scores 
in each grade item, these scores being multiplied by the grade items' weights,
and that sum being finally divided by the sum of the weights, as shown in 
this example:

    A1 70/100 weight 10, A2 20/80 weight 5, A3 10/10 weight 3:
    (0.7*10 + 0.25*5 + 1.0*3)/18 = 0.625 -> 62.5/100
   
```

web url: https://fathomless-inlet-07646.herokuapp.com/
git url: https://github.com/Cindyyyyw/276GradeCalculator