# Reviews

Client reviews from Trustpilot, copied here by hand. One review = one `.json` file in this folder.
The schema is in [`src/content.config.ts`](../../content.config.ts); the build fails if a field is missing or invalid.

## Add a review

1. Copy an existing file, e.g. `shadrach-oboh.json`, and name it after the author: `first-last.json`.
2. Fill in the fields:

   | Field | Required | Notes |
   |---|---|---|
   | `author` | yes | Name as shown on Trustpilot |
   | `rating` | yes | Whole number, 1 to 5 |
   | `title` | yes | Review title, copied exactly |
   | `text` | yes | Review text, copied exactly. Never edit, fix or translate it |
   | `date` | yes | Publication date, `YYYY-MM-DD` |
   | `url` | yes | Link to the review itself (open it from your Trustpilot profile), must be on `trustpilot.com` |
   | `project` | no | Business or project name. If set, it is shown as the main name with the author under it in small grey italics |
   | `lang` | no | `it` (default) or `en`: the language the review was written in |

3. `npm run build` to check it, then commit and push.

The page sorts reviews by date (newest first) and recalculates the count and the average by itself.
The average is shown from 3 reviews up; before that only the count is shown (Trustpilot itself shows a
lower, weighted score while a profile has few reviews, so a plain "5.0" would look inconsistent).

Only real reviews, word for word. Inside JSON, escape `"` as `\"` and write line breaks as `\n`.
No `Review` / `AggregateRating` structured data on purpose: Google ignores self-served reviews.
