# Social Career B2C Web PoT

# Make up requirements

## User stories

- [x] users in home page can see list of sectons starting from top: hero banner, recommended jobs, latest jobs, hot jobs
- [x] users in home page can view 10 jobs at max in sections recommended jobs, latest jobs, hot jobs
- [ ] users in home page can navigate to job full-list page from corresponding jobs sections
- [x] users in home page can navigate to job details page from individual job card
- [ ] users in job full-list page can lazy load jobs with infinite scroll
- [ ] users in job full-list page can navigate to job details page from individual job card
- [x] users in job details page can see list of sectons starting from top: hero banner, job title, date, description, TBC
- [ ] users in job details page can sign up a job

## Non functional requirements

- support desktop and mainstream mobile devices

## Prerequisites

- node 16.13.0 / npm 8.1.0 / typescript 4.5.2
- vite 2.6.4
- vue: 3.2.16

## Tech recipes

- GraphQL
- TailwindCSS w/ JIT
- Vue3 w/ Composition API
- Vite
- HeadlessUI
- Storybook
- Cypress, Nightwatch
- [TODO] Server-side Rendering (SSR)
- [TODO] Static Site Generation (SSG)

[How this project created](./docs/How_This_Project_Created.md)

# Run this demo

## first time setup

```sh
yarn
```

## run dev

```sh
yarn dev
```

## run tests

```sh
yarn test
yarn test:e2e
```

# TailwindCSS

- [Extracting components](https://tailwindcss.com/docs/extracting-components)
- [JIT](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css)
- [purge](https://tailwindcss.com/docs/optimizing-for-production)
- [dark mode](https://tailwindcss.com/docs/dark-mode)
- [font-families](https://tailwindcss.com/docs/font-family#font-families) (code: `font-sc`)
- [headlessui](https://headlessui.dev/)

# Vue3 features

## Composition API

https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

## SFC

https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax

code example

```js
TBC
```

### <script setup>

https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

## Router v4

https://next.router.vuejs.org/

nested named views

https://next.router.vuejs.org/guide/essentials/named-views.html#nested-named-views

## SVG

https://v3.vuejs.org/cookbook/editable-svg-icons.html#base-example

https://github.com/sdras/vue-sample-svg-icons/

https://sdras.github.io/vue-sample-svg-icons/

## Teleport

https://v3.vuejs.org/api/built-in-components.html#teleport

# GraphQL

## GraphQL client candidates

- [apollo-client](https://github.com/apollographql/apollo-client)
- [urql](https://formidable.com/open-source/urql/docs/basics/vue/)
- [villus](https://villus.logaretm.com/)
- [gqty](https://gqty.dev/docs/getting-started)

## Types generation

https://villus.logaretm.com/guide/typescript-codgen

https://www.graphql-code-generator.com/docs/getting-started/installation

https://the-guild.dev/blog/graphql-codegen-best-practices

```sh
yarn generate
```

## Debug tools

https://altair.sirmuel.design/

# Tests

## Unit test

```sh
TODO with jest
```

## Component test

```sh
yarn test
```

## E2e test

```sh
yarn test:e2e
```

# Lint / Prettier

https://eslint.vuejs.org/rules
https://stylelint.io/user-guide/get-started/

## first time husky setup

```sh
npx husky-init && yarn
```

## run linter

```sh
yarn lint:script
yarn lint:script --fix
yarn prettier -w -u .
yarn lint:style
```

## Caveats - stylelint v14 is not stable yet for vue3/postcss-html

```json
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
"stylelint-scss": "^3.21.0",
```

# i18n

## schema checking by TS

```js
// lang/index
export const i18n = createI18n<[MessageSchema], AvailableLocales>({
  locale: 'en-US',
  messages: {
    [Locale.en]: enUS,
    [Locale.zh]: zh,
  },
})

```

# References

https://miyauchi.dev/posts/vite-vue3-typescript/

# TODOs

- [x] Tailwindcss w/ JIT
- [ ] unit/component test [yarn test]
- [x] integration test - cypress [yarn test:ci]
- [x] Linter / commit hook
- [x] GraphQL client setup
- [x] CICD (Github Actions)
- [x] Deploy to staging
- [x] Storybook
- [x] i18n
- [x] composition API (https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)
- [x] Customize font
- [ ] SSR
- [ ] SSG
- [ ] PWA
