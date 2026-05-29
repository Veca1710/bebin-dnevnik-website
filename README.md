# Bebin dnevnik website synced

Sinhronizovana verzija za nastavak rada.

## Potrebni assets u public folderu

- background.png
- background-mobile.png
- appimage.png
- step-welcome.png
- step-add.png
- step-dnevnik.png
- step-pregled.png

## Važno

Mobile hero content koristi `pt-[14vh] sm:pt-[16vh]`.
Package verzije su fiksirane da Vercel build ne puca.


## Latest hero desktop fix

- Hero content desktop offset changed from `lg:ml-[38%]` to `lg:ml-[24%]`.
- Hero CTA buttons now use `min-w-[240px] whitespace-nowrap` to prevent text wrapping.


## Mobile hero update

- Mobile hero content moved up: `pt-[6vh] sm:pt-[8vh]`.
- Mobile hero vertical footprint reduced: `min-h-[640px]` and `pb-8 pt-24`.


## Mobile hero brighter overlay

- Mobile hero overlay made brighter for better text readability.
- Mobile hero keeps raised content position and CTA nowrap fixes.


## CTA button color update

- Hero primary CTA uses `rgb(159, 174, 142)`.
- Hero secondary CTA uses the same color for border.
- CTA text is prevented from wrapping.
- Social thumbnail updated to production image.


## Primary color sync

- Header logo background and CTA button colors synced to `rgb(159, 174, 142)`.
- Secondary CTA border synced to the same primary color.


## Primary color update

- Buttons set to `rgb(159, 174, 142)`.
- Header logo background set to `rgb(159, 174, 142)`.
- Favicon regenerated with `rgb(159, 174, 142)`.
