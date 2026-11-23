# Website maintenance guide
Run: `npm install` then `npm run dev`. Build: `npm run build` (output in /dist).

| To change...                          | Edit this file                |
|---------------------------------------|-------------------------------|
| WhatsApp number, phone, email, hours  | src/config/site.js            |
| Services (text, features)             | src/data/services.js          |
| Projects                              | src/data/projects.js          |
| Testimonials, About, process steps    | src/data/content.js           |
| Colours / fonts                       | tailwind.config.js            |
| Photos                                | public/images/ (same file names as in the data files) |

WhatsApp number format: country code + number, no "+" or spaces (e.g. 94771234567).
If a photo is missing, the site shows a navy placeholder with an icon automatically.
