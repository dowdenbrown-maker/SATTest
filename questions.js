// Question bank for SAT Practice.
//
// To add a question, copy an existing entry and edit it.
//   type: "choice" -> multiple choice; `answer` is the index (0-based) of the correct choice
//   type: "input"  -> student types a number; `answer` is a list of accepted answers
// `explanation` is shown after the student answers.

const QUESTIONS = {
  math: [
    {
      type: "choice",
      topic: "Algebra",
      prompt: "If 3x + 5 = 20, what is the value of x?",
      choices: ["3", "5", "15", "25/3"],
      answer: 1,
      explanation: "Subtract 5 from both sides: 3x = 15. Then divide by 3: x = 5."
    },
    {
      type: "choice",
      topic: "Percentages",
      prompt: "A jacket costs $80. It is on sale for 25% off. What is the sale price?",
      choices: ["$20", "$55", "$60", "$65"],
      answer: 2,
      explanation: "25% of $80 is 0.25 × 80 = $20. The sale price is $80 − $20 = $60."
    },
    {
      type: "input",
      topic: "Algebra",
      prompt: "If 2(y − 4) = 10, what is the value of y?",
      answer: ["9"],
      explanation: "Divide both sides by 2: y − 4 = 5. Add 4: y = 9."
    },
    {
      type: "choice",
      topic: "Geometry",
      prompt: "A rectangle has a length of 12 cm and a width of 5 cm. What is its perimeter?",
      choices: ["17 cm", "34 cm", "60 cm", "120 cm"],
      answer: 1,
      explanation: "Perimeter = 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34 cm."
    },
    {
      type: "choice",
      topic: "Geometry",
      prompt: "A right triangle has legs of length 6 and 8. How long is the hypotenuse?",
      choices: ["7", "10", "14", "48"],
      answer: 1,
      explanation: "Use the Pythagorean theorem: 6² + 8² = 36 + 64 = 100, and √100 = 10."
    },
    {
      type: "choice",
      topic: "Linear functions",
      prompt: "What is the slope of the line y = 4x − 7?",
      choices: ["−7", "4", "7", "−4"],
      answer: 1,
      explanation: "In y = mx + b, m is the slope. Here m = 4."
    },
    {
      type: "input",
      topic: "Ratios",
      prompt: "A recipe uses 3 cups of flour for every 2 cups of sugar. How many cups of flour are needed for 8 cups of sugar?",
      answer: ["12"],
      explanation: "8 cups of sugar is 4 times 2 cups, so you need 4 × 3 = 12 cups of flour."
    },
    {
      type: "choice",
      topic: "Statistics",
      prompt: "What is the mean (average) of 4, 8, 10, and 14?",
      choices: ["8", "9", "9.5", "36"],
      answer: 1,
      explanation: "Add them: 4 + 8 + 10 + 14 = 36. Divide by how many numbers there are (4): 36 ÷ 4 = 9."
    },
    {
      type: "choice",
      topic: "Algebra",
      prompt: "Which value of x makes x² = 49 true AND x > 0?",
      choices: ["−7", "7", "24.5", "49"],
      answer: 1,
      explanation: "Both 7 and −7 square to 49, but only 7 is greater than 0."
    },
    {
      type: "input",
      topic: "Functions",
      prompt: "If f(x) = 2x² + 1, what is f(3)?",
      answer: ["19"],
      explanation: "Replace x with 3: 2 × 3² + 1 = 2 × 9 + 1 = 18 + 1 = 19."
    },
    {
      type: "choice",
      topic: "Systems of equations",
      prompt: "If x + y = 10 and x − y = 4, what is x?",
      choices: ["3", "6", "7", "14"],
      answer: 2,
      explanation: "Add the two equations: 2x = 14, so x = 7. (Then y = 3.)"
    },
    {
      type: "input",
      topic: "Probability",
      prompt: "A bag has 3 red marbles and 5 blue marbles. If you pick one at random, what is the probability it is red? (Write as a fraction like 1/2 or a decimal)",
      answer: ["3/8", "0.375", ".375"],
      explanation: "There are 3 red marbles out of 3 + 5 = 8 total, so the probability is 3/8 (0.375)."
    }
  ],

  english: [
    {
      type: "choice",
      topic: "Vocabulary in context",
      prompt: "The scientist was known for her meticulous notes; every measurement was recorded carefully and checked twice.\n\nAs used in the sentence, \"meticulous\" most nearly means:",
      choices: ["careless", "very careful and precise", "short and quick", "colorful"],
      answer: 1,
      explanation: "The clue is \"recorded carefully and checked twice.\" Meticulous means showing great attention to detail."
    },
    {
      type: "choice",
      topic: "Grammar: subject–verb agreement",
      prompt: "Choose the option that correctly completes the sentence:\n\nThe box of crayons ___ on the table.",
      choices: ["are", "is", "were", "be"],
      answer: 1,
      explanation: "The subject is \"box\" (singular), not \"crayons.\" A singular subject takes \"is.\""
    },
    {
      type: "choice",
      topic: "Punctuation",
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        "Its going to rain today.",
        "It's going to rain today.",
        "Its' going to rain today.",
        "It is' going to rain today."
      ],
      answer: 1,
      explanation: "\"It's\" is short for \"it is.\" \"Its\" (no apostrophe) shows possession, like \"the dog wagged its tail.\""
    },
    {
      type: "choice",
      topic: "Transitions",
      prompt: "Maya studied for weeks before the test. ___, she earned the highest score in her class.\n\nWhich word best fills the blank?",
      choices: ["However", "As a result", "In contrast", "Meanwhile"],
      answer: 1,
      explanation: "Her high score happened because she studied. \"As a result\" shows cause and effect."
    },
    {
      type: "choice",
      topic: "Reading: main idea",
      prompt: "Honeybees do more than make honey. As they travel from flower to flower, they carry pollen that helps plants make seeds and fruit. Many of the fruits and vegetables people eat depend on bees for pollination.\n\nWhat is the main idea of the passage?",
      choices: [
        "Honey is the most important food made by insects.",
        "Bees are dangerous because they sting.",
        "Bees play an important role in helping plants grow food.",
        "Flowers come in many colors."
      ],
      answer: 2,
      explanation: "The passage focuses on how bees pollinate plants that produce the food we eat."
    },
    {
      type: "choice",
      topic: "Grammar: pronouns",
      prompt: "Choose the correct sentence:",
      choices: [
        "Me and Sam went to the library.",
        "Sam and me went to the library.",
        "Sam and I went to the library.",
        "Sam and myself went to the library."
      ],
      answer: 2,
      explanation: "Remove \"Sam and\" to test it: \"I went to the library\" is correct, so \"Sam and I\" is correct."
    },
    {
      type: "choice",
      topic: "Vocabulary in context",
      prompt: "After hiking all day, the campers were so famished that they ate three plates of food each.\n\n\"Famished\" most nearly means:",
      choices: ["extremely hungry", "very tired", "bored", "excited"],
      answer: 0,
      explanation: "Eating three plates of food each is the clue. Famished means extremely hungry."
    },
    {
      type: "choice",
      topic: "Concision",
      prompt: "Which choice is the clearest and least wordy?",
      choices: [
        "The reason why the game was canceled was because of the rain.",
        "The game was canceled because of the rain.",
        "Because of the rain is the reason the game was canceled.",
        "The game, due to the fact that it rained, was canceled because of rain."
      ],
      answer: 1,
      explanation: "The SAT rewards saying things clearly without repeating ideas. \"The reason why... was because\" is redundant."
    },
    {
      type: "choice",
      topic: "Reading: inference",
      prompt: "Leo looked out the window at the dark clouds, sighed, and put his soccer cleats back in the closet.\n\nWhat can you infer from this sentence?",
      choices: [
        "Leo doesn't like soccer anymore.",
        "Leo thinks it might rain and his game may be canceled.",
        "Leo lost his soccer game.",
        "Leo is going to buy new cleats."
      ],
      answer: 1,
      explanation: "Dark clouds suggest rain, and putting the cleats away suggests he doesn't expect to play."
    },
    {
      type: "choice",
      topic: "Punctuation: commas",
      prompt: "Which sentence uses commas correctly?",
      choices: [
        "I packed apples, bananas, and grapes for lunch.",
        "I packed, apples bananas and grapes for lunch.",
        "I packed apples bananas, and, grapes for lunch.",
        "I, packed apples, bananas and grapes, for lunch."
      ],
      answer: 0,
      explanation: "Use commas to separate items in a list: apples, bananas, and grapes."
    },
    {
      type: "choice",
      topic: "Grammar: verb tense",
      prompt: "Yesterday, our class ___ a trip to the science museum.\n\nWhich word best fills the blank?",
      choices: ["take", "takes", "took", "will take"],
      answer: 2,
      explanation: "\"Yesterday\" tells us it happened in the past, so we need the past tense: \"took.\""
    },
    {
      type: "choice",
      topic: "Reading: author's purpose",
      prompt: "Recycling one aluminum can saves enough energy to run a TV for three hours. Yet millions of cans are thrown away every day. Each of us can make a difference by putting cans in the recycling bin.\n\nThe author's main purpose is to:",
      choices: [
        "entertain readers with a funny story",
        "explain how TVs use energy",
        "persuade readers to recycle cans",
        "describe how cans are made"
      ],
      answer: 2,
      explanation: "The last sentence encourages readers to act (\"Each of us can make a difference\"), so the purpose is to persuade."
    }
  ]
};
