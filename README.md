# jest-axe-dialog-label-repro
Minimal, Reproducible Example (MRE) for unexpected jest-axe test failure on the "aria-dialog-name" rule.

This repository was built with **React + TypeScript + Vite**

## Usage

- Install dependencies: `npm i`
- Run tests: `npm t`
- Run dev server: `npm run dev`

## Description

This repository is a reproduction of a potential issue with the `jest-axe` library's "aria-dialog-name" rule.

The component in `src/App.tsx`, contains an `input` element, a corresponding `label` with the `htmlFor` attribute, and a `div` with `role="dialog` and `aria-labelledby=<input element id>`. If you run the dev server and open chrome's accessibility devtools, you can see the `div` is appropriately labelled by the `input`. However, the test in `App.test.tsx` fails with the following error message from `jest-axe`:

> "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
> 
> Fix any of the following:
>   aria-label attribute does not exist or is empty
>   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
>   Element has no title attribute
>
> You can find more information on this issue here: 
> https://dequeuniversity.com/rules/axe/4.9/aria-dialog-name?application=axeAPI
