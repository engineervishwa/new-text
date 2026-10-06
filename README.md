# Shri Online Center – Website

Plain HTML/CSS one-page website. No build step – upload the folder as-is.

```
index.html            ← the whole page (text, SEO data, FAQ)
css/style.css         ← design
js/main.js            ← footer year + "अभी खुला है / बंद है" badge
images/               ← favicon, shop photo, share-preview image
robots.txt, sitemap.xml
```

## 1. Replace placeholders (Find & Replace in all files)

| Placeholder | Replace with | Where |
|---|---|---|
| `9876543210` / `98765 43210` | Real mobile number | index.html (call, WhatsApp, schema) |
| `shrionlinecenter.in` | Your real domain | index.html, robots.txt, sitemap.xml |
| `images/shop-placeholder.svg` | Real photo, e.g. `images/shop.jpg` (about 1200×900, under 200 KB) | index.html (hero) |
| Google review link | Link from Google Business Profile → "Ask for reviews" | index.html (search `TODO`) |
| Opening days | Currently **Mon–Sun 9–6**. If Sunday is closed, edit the schema `dayOfWeek` and the contact text | index.html |

Prices / new services: add a new `<li>` inside the right `service-list` in index.html.
If you change an FAQ answer, change it in **both** places (the visible FAQ and the `FAQPage` script at the top) – Google requires them to match.

## 2. Put it online (free)

**Netlify (easiest):** go to https://app.netlify.com/drop and drag this folder onto the page → you get a live link.
Then buy a domain (e.g. `shrionlinecenter.in`, ~₹500–800/yr from GoDaddy/Hostinger/BigRock) and connect it in Netlify → Domain settings.
Cloudflare Pages or GitHub Pages also work.

## 3. Make Google find it (do these after going live)

1. **Google Business Profile** (business.google.com) → Edit profile → add the **Website** link, check hours match, set category "Internet cafe" / add "Government office" related services, upload 10+ real photos (shop board, counter, certificate).
2. **Google Search Console** (search.google.com/search-console) → add domain → submit `sitemap.xml` → "Request indexing" for the home page.
3. **Reviews = biggest ranking factor.** Ask every happy customer to leave a Google review (put the review QR code at the counter). Reply to every review.
4. Keep **Name, Address, Phone exactly the same** on website, Google profile, Justdial, Facebook page.
5. Share the website link in local WhatsApp groups – the preview image is ready.
6. Test: https://search.google.com/test/rich-results (should show LocalBusiness + FAQ) and https://pagespeed.web.dev.

Note: do not add government logos (Aadhaar/UIDAI, CSC, Digital India) unless you have written permission.
