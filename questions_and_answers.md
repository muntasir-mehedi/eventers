
  <h1>MCQ TEST</h1>


###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>In the code provided, there is a typo in the variable name. It should be greeting, but it is mistakenly written as greetign. As a result, when you try to log greetign, JavaScript will throw a ReferenceError because the variable greetign has not been defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>In JavaScript, when you use the + operator with a string and a number, JavaScript converts the number to a string and performs string concatenation. In this case, "2" is treated as a string, so the + operator concatenates it with the number 1, resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>In the code, the info.favoriteFood property is initially assigned the value "🍕", which is the first element of the food array. Later, it is reassigned to "🍝". However, this reassignment does not modify the food array in any way. Therefore, when you log the food array, it remains unchanged, containing ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In the sayHi function, there is a parameter name that is expected to be passed when calling the function. However, in the console.log statement, the sayHi function is called without providing any argument. In this case, name becomes undefined, so the function returns "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: 2

<i>The forEach loop iterates over each element in the nums array and increments the count variable by 1 for each element that is truthy. In JavaScript, the number 0 is considered falsy, while all other numbers, including 1, 2, and 3, are considered truthy. Therefore, the loop increments count by 1 for the values 1, 2, and 3, resulting in a final count value of 2.</i>

</p>
</details>
