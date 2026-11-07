// SAT Practice app logic. Questions live in questions.js.

const $ = (id) => document.getElementById(id);

const screens = {
  start: $("start-screen"),
  quiz: $("quiz-screen"),
  results: $("results-screen")
};

const PRAISE = ["Correct! 🎉", "Great job! ⭐", "You got it! ✅", "Nice work! 🙌", "Awesome! 🚀"];
const ENCOURAGE = ["Not quite.", "Good try!", "Almost!", "Keep going!"];

let state = {
  subject: null,
  questions: [],
  index: 0,
  score: 0,
  history: [], // { question, given, correct }
  name: ""
};

function show(screen) {
  Object.values(screens).forEach((s) => (s.hidden = true));
  screens[screen].hidden = false;
  window.scrollTo(0, 0);
}

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Normalise typed answers so "  9 ", "9.0" and "9" all match.
function normalise(value) {
  const v = String(value).trim().toLowerCase().replace(/\s+/g, "").replace(/^\$/, "");
  const n = Number(v);
  return v !== "" && !Number.isNaN(n) ? String(n) : v;
}

function correctAnswerText(q) {
  return q.type === "choice" ? q.choices[q.answer] : q.answer[0];
}

// ---------- Start ----------

function startQuiz(subject) {
  state.subject = subject;
  state.name = $("name-input").value.trim();

  let pool;
  if (subject === "mixed") {
    pool = [
      ...QUESTIONS.math.map((q) => ({ ...q, subject: "Math" })),
      ...QUESTIONS.english.map((q) => ({ ...q, subject: "Reading & Writing" }))
    ];
  } else {
    pool = QUESTIONS[subject];
  }

  const count = $("count-select").value;
  const shuffled = shuffle(pool);
  state.questions = count === "all" ? shuffled : shuffled.slice(0, Number(count));
  state.index = 0;
  state.score = 0;
  state.history = [];

  show("quiz");
  renderQuestion();
}

// ---------- Quiz ----------

function renderQuestion() {
  const q = state.questions[state.index];
  const total = state.questions.length;

  $("progress-text").textContent = `Question ${state.index + 1} of ${total}`;
  $("score-text").textContent = `Score: ${state.score}`;
  $("progress-fill").style.width = `${(state.index / total) * 100}%`;
  $("topic").textContent = q.subject ? `${q.subject} · ${q.topic}` : q.topic;
  $("prompt").textContent = q.prompt;

  $("feedback").hidden = true;
  $("next-btn").hidden = true;

  const choicesEl = $("choices");
  choicesEl.innerHTML = "";
  const form = $("input-form");
  const input = $("answer-input");

  if (q.type === "choice") {
    form.hidden = true;
    q.choices.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.type = "button";
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = String.fromCharCode(65 + i);
      const label = document.createElement("span");
      label.textContent = text;
      btn.append(letter, label);
      btn.addEventListener("click", () => answerChoice(i));
      choicesEl.appendChild(btn);
    });
  } else {
    form.hidden = false;
    input.value = "";
    input.className = "";
    input.disabled = false;
    form.querySelector("button").disabled = false;
    input.focus();
  }
}

function answerChoice(chosen) {
  const q = state.questions[state.index];
  const buttons = $("choices").querySelectorAll(".choice");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add("correct");
    else if (i === chosen) b.classList.add("wrong");
  });
  recordAnswer(q, q.choices[chosen], chosen === q.answer);
}

function answerInput(event) {
  event.preventDefault();
  const q = state.questions[state.index];
  const input = $("answer-input");
  const given = input.value;
  if (given.trim() === "") {
    input.focus();
    return;
  }
  const isCorrect = q.answer.some((a) => normalise(a) === normalise(given));
  input.disabled = true;
  $("input-form").querySelector("button").disabled = true;
  input.classList.add(isCorrect ? "correct" : "wrong");
  recordAnswer(q, given.trim(), isCorrect);
}

function recordAnswer(q, given, isCorrect) {
  if (isCorrect) state.score++;
  state.history.push({ question: q, given, correct: isCorrect });

  const fb = $("feedback");
  fb.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
  $("feedback-title").textContent = isCorrect
    ? pick(PRAISE)
    : `${pick(ENCOURAGE)} The correct answer is: ${correctAnswerText(q)}`;
  $("feedback-explanation").textContent = q.explanation;
  fb.hidden = false;

  $("score-text").textContent = `Score: ${state.score}`;
  const next = $("next-btn");
  next.textContent = state.index + 1 < state.questions.length ? "Next question →" : "See my results →";
  next.hidden = false;
  next.focus();
}

function nextQuestion() {
  state.index++;
  if (state.index < state.questions.length) renderQuestion();
  else showResults();
}

// ---------- Results ----------

function showResults() {
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);
  const who = state.name ? `, ${state.name}` : "";

  let title, message;
  if (pct === 100) {
    title = `Perfect score${who}! 🏆`;
    message = "You got every single question right. Amazing!";
  } else if (pct >= 80) {
    title = `Excellent work${who}! 🌟`;
    message = "You really know this stuff. Check the review below for the ones you missed.";
  } else if (pct >= 50) {
    title = `Good effort${who}! 👍`;
    message = "You're getting there. Read the explanations below and try again!";
  } else {
    title = `Keep practicing${who}! 💪`;
    message = "Every question you practice makes you stronger. Look over the explanations and give it another go.";
  }

  $("results-title").textContent = title;
  $("results-score").textContent = `${state.score} / ${total}  (${pct}%)`;
  $("results-message").textContent = message;

  const list = $("review-list");
  list.innerHTML = "";
  state.history.forEach(({ question, given, correct }) => {
    const li = document.createElement("li");
    const qText = document.createElement("div");
    qText.className = "q";
    qText.textContent = question.prompt;
    const result = document.createElement("div");
    if (correct) {
      result.innerHTML = `<span class="ok">✔ Correct</span> — you answered: `;
      result.append(given);
    } else {
      result.innerHTML = `<span class="bad">✘ Incorrect</span> — you answered: `;
      result.append(`${given}. Correct answer: ${correctAnswerText(question)}`);
    }
    li.append(qText, result);
    list.appendChild(li);
  });

  show("results");
}

// ---------- Wire up ----------

document.querySelectorAll(".subject-btn").forEach((btn) =>
  btn.addEventListener("click", () => startQuiz(btn.dataset.subject))
);
$("input-form").addEventListener("submit", answerInput);
$("next-btn").addEventListener("click", nextQuestion);
$("retry-btn").addEventListener("click", () => startQuiz(state.subject));
$("home-btn").addEventListener("click", () => show("start"));
