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
