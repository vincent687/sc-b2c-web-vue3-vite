# Social Career B2C Web PoT

## User stories

- users in home page can see list of sectons starting from top: hero banner, recommended jobs, latest jobs, hot jobs
- users in home page can view auto-rotate carousel in section hero banner section
- users in home page can view 10 jobs at max in sections recommended jobs, latest jobs, hot jobs
- users in home page can navigate to job full-list page from corresponding jobs sections
- users in home page can navigate to job details page from individual job card
- users in job full-list page can lazy load jobs with infinite scroll
- users in job full-list page can navigate to job details page from individual job card
- users in job details page can see list of sectons starting from top: hero banner, job title, date, description, TBC
- users in job details page can sign up a job

## Non functional requirements

- support desktop and mainstream mobile devices

## Prerequisites

- node 16.9.1 / npm 7.21.1 / typescript 4.4.3
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

## First time setup

```sh
yarn
```

## Run app on local

```sh
yarn dev
```

## Run component test

```sh
yarn test

# headless mode
yarn test:ci
```

## Run integration test

```sh
yarn test:e2e

# headless mode
yarn test:e2e:ci
```

# TailwindCSS

- [Extracting components](https://tailwindcss.com/docs/extracting-components)
- [JIT](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css)
- [purge](https://tailwindcss.com/docs/optimizing-for-production)
- [dark mode](https://tailwindcss.com/docs/dark-mode)
- headlessui

# Vue3 features

## Composition API

https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

## SFC

https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax

code example

```vue
TBC
```

### <script setup>

https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

## Router v4

https://next.router.vuejs.org/

nested named views

https://next.router.vuejs.org/guide/essentials/named-views.html#nested-named-views

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

## Debug tools

https://altair.sirmuel.design/

# TODOs

- [x] Tailwindcss w/ JIT
- [ ] unit/component test [yarn test]
- [ ] integration test - cypress [yarn test:ci]
- [ ] Linter / commit hook
- [ ] GraphQL client setup
- [ ] CICD (Github Actions)
- [ ] Deploy to staging
- [ ] Storybook
- [ ] Custom font
- [ ] i18n
- [ ] PWA
- [ ] SSR
- [x] composition API (https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)
