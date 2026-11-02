# CESSAURA: French curls landing page

A fast, mobile-first landing page for **CESSAURA**, a French curls and fashion business in Grafton, Freetown, Sierra Leone.
Plain HTML, CSS and a little vanilla JavaScript in one file. No framework, no build step, no web fonts, no trackers.

## Write-up

CESSAURA is a French curls business in Grafton, Freetown, run by Cess, selling bundles of curls to women who want full, bouncy hair at a fair price. The page keeps her white, black and gold brand with a vector version of her crown logo, and it is built around how her customers already buy: pick a colour from real photos of her bundles, choose 24 or 30 inch and how many packets, and the page writes the WhatsApp order with the total in Leones. The payment buttons dial Orange Money (#144#) or Afrimoney (*161#) in one tap, customers can also pay cash on delivery, the location is described by the ICODEHS Central Mosque and Conex Fuel Station landmarks with a one-tap Google Maps link, and the whole page switches to Krio with one tap. With no framework, no web fonts, a 2 KB logo and lazy-loaded WebP photos, a first visit is about 175 KB, the three short clips download only when someone taps play, and a service worker keeps the page working offline after the first visit.

## Results (Lighthouse 12, mobile, measured 2 November 2026)

| Test | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Default mobile (slow 4G) | 100 | 100 | 100 | 100 |
| Custom 3G (700 kbps, 300 ms RTT, 4x CPU slowdown) | 93 to 96 | 100 | 100 | 100 |

3G profile: First Contentful Paint 1.6 s, Largest Contentful Paint 2.6 to 3.1 s, Total Blocking Time under 100 ms. Page weight about 175 KB with every thumbnail; full-size photos and clips load only when tapped.
axe-core: 0 violations in English and Krio modes.

## What is on the page

- Name, crown logo, tagline “Your Beauty, Your Aura.” and live open/closed status in Sierra Leone time (GMT)
- Order builder: 8 colours with real bundle photos (tap the magnifier to see each one bigger), 24 or 30 inch, number of packets, live total in SLE, and a prefilled WhatsApp order
- Three short clips of the curls (on a customer and two bundles), each loaded only when tapped (about 200 to 245 KB each)
- Customer photos you can tap to see full size and swipe through, fashion and lifestyle enquiries, how to order in 4 steps
- Orange Money and Afrimoney (copy the number, dial the menu in one tap, “I have paid” message) and cash on delivery
- Meet Cess: the owner's photo with a direct WhatsApp button
- Landmark location (CRS, Grafton, near ICODEHS Central Mosque, by Conex Fuel Station), Plus Code, Google Maps directions, opening hours with today highlighted, and email
- Full English / Krio switch with `lang="kri"` for screen readers; sticky Call / Order / Pay bar

## Reuse it for your business

1. Open `index.html` and search for `EDIT:` to change the name, tagline, colours, prices, numbers, landmark and hours.
2. Replace the photos in `img/` with your own (WebP, under 20 KB each for thumbnails).
3. Update the hours list `H`, `WA` number and `PRICE` at the top of the script, and the file list in `sw.js`.
4. Upload the folder to GitHub Pages, Netlify or Vercel.

## Credits

- Logo, product photos, customer photos and video: CESSAURA, used with the owner’s permission. Logo traced to SVG for this page.
- Icons: drawn for this page. Fonts: the phone’s own system fonts.
