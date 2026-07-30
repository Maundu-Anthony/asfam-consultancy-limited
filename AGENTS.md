# Agent guidance for ASFAM Consultancy Limited

## Purpose
This file helps AI coding agents understand the repository structure, conventions, and common tasks so they can make safe, consistent changes.

## Project overview
- React application bootstrapped with Create React App.
- Uses `react-router-dom` v7 for client-side navigation.
- Uses plain CSS files imported directly into components.
- No backend code is present in this repository.

## Key commands
- `yarn start` — start the development server
- `yarn build` — create a production build
- `yarn test` — run the test runner

## Source layout
- `src/App.js` — root application component; sets up `BrowserRouter`, route definitions, and global app scaffolding.
- `src/pages/` — page-level screens like `Home`, `About`, `Services`, `Team`, `Contact`.
- `src/components/` — reusable UI components such as `Header`, `Footer`, `ServiceCard`, `TeamMember`, `PartnerCard`.
- `src/images/` — static image assets imported by components.
- `src/*.css` and `src/components/*.css` — styling is file-based, not CSS modules.

## Conventions for editing and components
- Use functional components and React hooks.
- Keep routing within `src/App.js` and page-specific layout in `src/pages/*`.
- Use `Link` from `react-router-dom` for internal navigation.
- Continue using plain CSS import patterns; avoid introducing new styling paradigms unless requested.
- When adding UI functionality, prefer small reusable components under `src/components/`.

## Special note
- `src/App.js` contains a DOM mutation observer and watermark-removal logic. Treat that behavior as intentional until the user explicitly asks to remove or refactor it.

## Documentation links
- `README.md` — repo setup and available scripts.
- Create React App docs: https://facebook.github.io/create-react-app/docs/getting-started
