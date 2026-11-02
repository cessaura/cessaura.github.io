# CESSAURA website

This is the website for CESSAURA, Cess's French curls business in Grafton, Freetown. It's a single HTML page with a bit of plain JavaScript. There's no framework, no build step and no web font to download, so it opens quickly on a cheap Android phone.

- Live page: https://cessaura.github.io/
- Source code: https://github.com/cessaura/cessaura.github.io

## Write-up

Cess sells French curls by the packet from Grafton. The page is built around the questions a buyer has before ordering: you pick a colour from photos of her actual bundles, choose 24 or 30 inch and how many packets, and the page writes the WhatsApp message for you with the total in Leones already worked out. It keeps her white, black and gold look and her crown logo, the Pay buttons open the Orange Money (#144#) or Afrimoney (*161#) menu in one tap, cash on delivery is there too, and the whole page switches to Krio. To stay fast on Salone 3G I traced her logo into a 2 KB SVG and used small WebP photos that load as you scroll, so a first visit is about 175 KB, the video clips only download when someone taps play, and the page still opens offline after the first visit.

## Test results

Lighthouse 12, mobile, measured on 2 November 2026:

| Test | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Standard mobile (slow 4G) | 98 to 100 | 100 | 100 | 100 |
| Harsh 3G (700 kbps, 300 ms delay, 4x slower CPU) | 93 to 96 | 100 | 100 | 100 |

On the 3G test the first text appears after about 1.6 s and the main photo after 2.6 to 3.1 s. The page weighs about 175 KB with every thumbnail. Full-size photos and video clips only download when someone taps them. The axe accessibility checker finds no problems in English or in Krio.

## What's on the page

- Her crown logo, the tagline "Your Beauty, Your Aura." and a live open or closed sign (Sierra Leone time)
- The order box: 8 colours shown with real bundle photos (tap the magnifier for a bigger view), 24 or 30 inch, number of packets, a running total in Leones and a ready-written WhatsApp order
- Three short clips, one on a customer and two of the bundles. Each is 200 to 245 KB and loads only when tapped.
- Customer photos that open full size and can be swiped through
- A section for her clothing and accessories, where customers ask what's in stock
- Four steps for ordering
- Orange Money and Afrimoney (copy the number, or tap to dial the menu), plus cash on delivery
- A short "Meet Cess" section with her photo
- Buttons to share the page and to save Cess's number to your phone
- Directions from ICODEHS Central Mosque, a Plus Code, a Google Maps link, the opening hours and her email
- An English and Krio switch. Krio text is marked `lang="kri"` for screen readers.
- A Call, Order and Pay bar that stays at the bottom of the screen

## Using it for another business

1. Open `index.html` and search for `EDIT:`. That's where the name, tagline, colours, prices, numbers, landmark and hours live.
2. Swap the photos in `img/` for your own. Thumbnails under 20 KB each work well.
3. Change the hours list `H`, the `WA` number and `PRICE` near the top of the script, and the file list in `sw.js`.
4. Upload the folder to GitHub Pages, Netlify or Vercel.

## Credits

- Design and build: James Emmanuel Paul Yambasu (https://james-yambasu-portfolio-1.vercel.app/)
- The logo, product photos, customer photos and video clips belong to CESSAURA and are used with Cess's permission. I traced the logo to SVG for this page.
- I drew the icons. The text uses the phone's own fonts.
