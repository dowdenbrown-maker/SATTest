# SAT Practice

A simple, kid-friendly SAT practice app. It asks example **Math** and **Reading & Writing** questions and tells you right away whether each answer is correct, with a short explanation.

## How to use

Open `index.html` in any web browser. There's nothing to install and it works offline.

1. Enter a name (optional), pick a subject (Math, Reading & Writing, or Mixed) and choose how many questions.
2. Answer each question. Multiple-choice questions are answered by clicking a choice; some math questions ask you to type a number.
3. After each answer you see ✅ / ❌, the correct answer, and an explanation.
4. At the end you get a score and a review of every question.

## Adding questions

All questions are in `questions.js`. Copy an existing entry and edit it:

```js
{
  type: "choice",            // multiple choice
  topic: "Algebra",
  prompt: "If 3x + 5 = 20, what is x?",
  choices: ["3", "5", "15", "25/3"],
  answer: 1,                 // index of the correct choice (0 = first)
  explanation: "Subtract 5, then divide by 3."
}
```

```js
{
  type: "input",             // student types the answer
  topic: "Ratios",
  prompt: "3 cups of flour per 2 cups of sugar. Flour for 8 cups of sugar?",
  answer: ["12"],            // every accepted answer, e.g. ["3/8", "0.375"]
  explanation: "8 is 4 × 2, so 4 × 3 = 12."
}
```

## Files

- `index.html`: page layout
- `style.css`: styling
- `app.js`: quiz logic (shuffling, checking answers, scoring, results)
- `questions.js`: the question bank
