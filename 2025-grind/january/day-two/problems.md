# 🟢 JavaScript Challenges — Batch Set

## 🟩 Challenge 9 — `map` + simple logic - `Done1`

**Goal:** Masanay sa `map` + ternary

### Data

```js
const numbers = [1, 2, 3, 4, 5];
```

### Task

Gumawa ng function na:

- Gagamit ng `map`
- Magbabalik ng array ng strings:

  - Kung even → `"X is even"`
  - Kung odd → `"X is odd"`

### Expected Output

```js
["1 is odd", "2 is even", "3 is odd", "4 is even", "5 is odd"];
```

---

## 🟩 Challenge 10 — `filter` + `map`

**Goal:** Pili muna, bago baguhin

### Data

```js
const scores = [45, 78, 90, 32, 88, 60];
```

### Task

- I-filter ang scores na **>= 60**
- I-map sila sa string:

  - `"Score: X"`

### Expected Output

```js
["Score: 78", "Score: 90", "Score: 88", "Score: 60"];
```

---

## 🟨 Challenge 11 — Array of objects (`map`)

**Goal:** Objects + conditional logic

### Data

```js
const users = [
  { name: "Ana", age: 17 },
  { name: "Ben", age: 21 },
  { name: "Cara", age: 16 },
  { name: "Dan", age: 25 },
];
```

### Task

Gumawa ng function na:

- Gumagamit ng `map`
- Output:

  - `"X is an adult"` kung age >= 18
  - `"X is a minor"` kung age < 18

### Expected Output

```js
["Ana is a minor", "Ben is an adult", "Cara is a minor", "Dan is an adult"];
```

---

## 🟨 Challenge 12 — `filter` + `map` (objects)

**Goal:** Combine logic cleanly

### Data

```js
const products = [
  { name: "Laptop", price: 45000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];
```

### Task

- I-filter ang products na **price >= 1000**
- I-map sa string:

  - `"Product: X - ₱price"`

### Expected Output

```js
[
  "Product: Laptop - ₱45000",
  "Product: Keyboard - ₱1500",
  "Product: Monitor - ₱12000",
];
```

---

## 🟧 Challenge 13 — Intro to `reduce` (EASY)

**Goal:** First step sa `reduce`

### Data

```js
const expenses = [200, 500, 150, 1000];
```

### Task

Gumawa ng function na:

- Gumagamit ng `reduce`
- I-return ang **total expenses**

### Expected Output

```js
1850;
```

---

## 🧠 Rules

- ❌ bawal `for`
- ❌ bawal `forEach`
- ❌ bawal `push`
- ✅ `map`, `filter`, `reduce` lang
- ✅ pwede ternary

---

## 🟢 Reminder

- Isang challenge lang muna
- Kapag gumana → **commit**
- Clean code > mabilis na code
