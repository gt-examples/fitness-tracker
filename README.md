# Fitness Tracker

A multilingual workout tracker demonstrating locale-aware units, rep counts, and workout stats with General Translation.

**[Live Demo](https://fitness-tracker.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a fitness tracking dashboard with weekly workout summaries, exercise logs, and locale-aware formatting for numbers, dates, and units. All content is fully translated using GT's i18n primitives.

## GT Features Used

- `<T>` — JSX translation
- `<Num>` — Locale-aware number formatting
- `<DateTime>` — Date/time formatting
- `<Var>` — Dynamic values within translations
- `getGT` — Server-side string translations
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/fitness-tracker.git
cd fitness-tracker
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
