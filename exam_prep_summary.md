# Webtech (IT2805) — Exam Prep Summary

Summary of the exam info lecture, focused on what matters for someone sitting the exam.

---

## 1. Logistics

- **Date:** 9th of January (postponed from December)
- **Time:** 09:00 – 13:00 (4 hours)
- **Format:** Digital exam (Inspera)
- **Room assignment:** Available on Studentweb 3 days before the exam — check Studentweb notifications
- **Languages:** Exam is given in Bokmål, Nynorsk and English. You can switch freely between versions on Inspera, and you can answer in any of the three languages.
- **Oral exam:** Only for exchange students unable to attend — held 3rd of December. More info sent out by end of next week after the lecture.
- **Lecturer at the exam:** Not present in person, but reachable by phone if needed.

### Aids allowed (cheat sheet)
- **2 regular A4 pages, printed/handwritten on both sides** → 4 sides total.
  - Do **NOT** bring 4 single-sided A4 pages — invigilators may reject this.
- **No font-size restriction**, but it must be readable **without a magnifying glass** (magnifiers are not allowed).
- **No restriction on content** — put whatever you want on it (theory, code snippets, selectors, events, etc.).

---

## 2. Exam Format — 4 sections

| Section | Approx. weight | Notes |
|---|---|---|
| Multiple choice | 20–30% | Mostly theory, a few syntax/output questions |
| Find result of code (+ explain) | small portion | 1 pt correct answer, 2 pts correct explanation |
| Short theory questions | ~15–20% | Explain concepts in words |
| Coding questions | **biggest chunk** | The course emphasises coding/practice |

Percentages are indicative — the MCQ share may drop and coding share rise accordingly.

### You cannot run code during the exam
- Write in a text editor inside Inspera.
- Minor syntax errors are **not** penalised, as long as the code is readable.
- Heavily broken syntax → lost points.
- Writing the solution as English prose / pseudocode instead of code → **0 marks**.

---

## 3. Section details and tips

### 3a. Multiple choice
- Mostly **theory**: history of the internet, how the internet works, **TCP/IP** and protocols.
- Some on CSS syntax errors ("which line is wrong?").
- Some output-prediction style (here's some JS, what does it print?).
- **Matching questions** are common: e.g. match CSS `overflow` values (`hidden`, `scroll`, `visible`, `clip`, `auto`) to their descriptions, or match TCP/IP layers to their functionality.
- **Know your TCP/IP layers cold.**

### 3b. Find the result of the code
- Predict the output, then **explain why**.
- **Do not** go line by line — explain in terms of mechanisms (event loop, hoisting, scope, async behaviour, etc.).
- 1/3 for the answer, 2/3 for the explanation.

### 3c. Short theory questions
Examples flagged by the lecturer:
- Difference between **GET and POST**.
- Difference between ways of adding CSS to HTML (inline / internal / external / embedded) — including the `!important` keyword.
- What is a **DNS** (Domain Name Server)?

### 3d. Coding questions (biggest chunk)
Typical question types:
- Small JS function (≈4–5 marks). Example: **days left until Christmas** using `Date` object + millisecond math.
- Larger task (≈10 marks): a UI with HTML provided, then 5 sub-tasks like:
  - Change colour of textbox **on entry** (event handling).
  - Validate on losing focus (`blur`).
  - **Email validation** — they may forbid `type="email"`; if forbidden and you use it, you get 0 for that part.
  - Convert input to lowercase on `keyup`.
  - Math computations driven by events.

Marks are scaled to the amount of code expected. HTML for the frontend may be provided.

---

## 4. Common reasons people lose points (easy to fix)

- **Panicking** — 4 hours is plenty.
- Writing **pseudocode / English** instead of actual code.
- Wrong event names — be exact:
  - `getElementById` (both `I` and `d`/`Id` capitalised correctly) — `getElementByID` (both caps) **is a mistake**.
- Misusing `getElementsByClassName` / `getElementsByTagName` (note the plural "Elements").
- Mismatch between selector/method choice and how many elements you're actually grabbing.

### Style/syntax notes
- **Use `let`, not `var`.** `var` allows redeclaration → bad for debugging. `let` allows reassignment but not redeclaration.
- Attribute values in HTML: just use strings (quotes), no need for brackets.
- `querySelector` / `querySelectorAll` are modern and "one-size-fits-all". `getElementById` is fine for small pages — your choice.

---

## 5. What to put on the cheat sheet (lecturer's recurring tips)

- **Event names** (spell them right — `click`, `keyup`, `blur`, `focus`, `submit`, `change`, …).
- **CSS selectors.**
- **Basic CSS properties** — especially ones you keep forgetting in practice.
- Anything *you* keep getting wrong while practising.
- TCP/IP layer info and internet/protocol theory is fair game — put it on if it helps.

---

## 6. Syllabus / what to study

Everything covered in lectures and lecture notes. Specifically:

- **CSS:** basic + not-so-basic properties, selectors, **Grid**, **Flex**.
- **JavaScript:** DOM manipulation, event handling, basic JavaScript (whatever's on Blackboard).
- **String API and Array API** — see "Basic JavaScript" section in lecture notes (JavaScript arrays, JavaScript strings, "more tutorials" code samples).
- **Internet / TCP/IP / protocols / how the web works** — theory side.
- **HTTP methods** (GET vs POST), DNS, etc.

### Study materials
- Lecture notes (text-heavy on purpose — readable).
- Exercise notes.
- Course ebook + its examples.
- The **assignments** — redo them, work through your feedback.
- **Code uploaded to Blackboard** for practice.
- **3 previous exams** are on Blackboard with potential solutions.
  - One of them contains a **Canvas** question — **Canvas is NOT in the syllabus**, ignore it.
- The lecturer may upload solutions to the example coding questions by end of that week.

### NOT in the exam
- **XML** — not covered, won't appear.
- **Canvas** — ignore the Canvas question in the old exam.
- Anything not covered in lectures.

---

## 7. Grade distribution (last year, for reference)

- ~75% of students got **B or C** (111 B's + 81 C's).
- ~8% A's, ~12% D's, ~4% (≈10 students) failed.
- Translation: practising even ~2 hours/day should be enough to pass comfortably. An A requires more.

---

## 8. Q&A after the lecture

- **Email exam questions:** lecturer answers on **Wednesdays and Fridays** — expect 1–2 day delay.
- The course leads naturally into **IT2810** (server-side, client–server communication, databases).