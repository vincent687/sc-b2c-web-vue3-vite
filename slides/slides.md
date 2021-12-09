---
title: Vue3 PoT
theme: simple #night
revealOptions:
  transition: 'fade'
---

## Vue3 PoT

###### Benny Ng, Vincent Wong

---

## about

- as Proof of Technology
- by building Social Career b2c prototype
- crash course on Vue3, Vite, TailwindCSS

---

## agenda

- user stories walkthrough
- developers stories walkthrough
- tech demo walkthrough
- missing puzzles
- Q & A

---

## users can

- view curated jobs in home page
- browse all jobs in category page
- view every job info in details page
- switch language and share to others
- toggle dark theme
- browse on mobile and desktop happily

---

## final prototype

<iframe frameborder="1" width="800" height="400" src="https://sc-b2c.netlify.app"></iframe>

https://sc-b2c.netlify.app

---

## developers can

- run dev and see changes ⚡ fast
- write composable and reactive Vue codes
- rapid styling with internal UI library
- consume API with flexible schema
- ensure every commit/MR pass e2e & lint
- write programmable SVG
- ensure i18n keys are exhaustive

---

## meet Vite

- run dev and see changes ⚡ fast

---

## what is Vite ?

- modern build tool
- meaning "quick" in French <!-- .element: class="fragment" data-fragment-index="1" -->
- comparatively, Webpack is 🐢 <!-- .element: class="fragment" data-fragment-index="2" -->
- remain speedy regardless of app size <!-- .element: class="fragment" data-fragment-index="3" -->
- how so ? <!-- .element: class="fragment" data-fragment-index="6" -->

---

## Vite vs Webpack

- native ES modules
- vite compiling Vue is vite (same author ❤️)
- breakdown into JS, template and stylesheet
- smart detection of unchanged module

#### [how-it-work reference](https://harlanzw.com/blog/how-the-heck-does-vite-work/#a-recap-on-vite)

Note:

There is no bundling or compiling needed to start the dev server, so it's damn quick (< 300ms).

You can see how the above allows the Hot Module Replacement to work efficiently. When you have a module that is changed, say the styles within a component, instead of reloading the entire component tree, only the style module needs to be replaced.

Vite scales well for any app size because it only needs to request the modules for the route you're on.

---

##### demo time

### how fast is Vite

---

## meet Vue 3

- write composable and reactive Vue codes

---

## Vue 3 vs 2

- re-write of Vue2 from scratch, lighter and faster
- embrace Typescript support
- embrace reactivity
- composition API
- `Filter` is removed (computed is recommended)
- data-driven dynamic CSS
- multiple root in template (`Fragments`)
- `Teleport`, `Suspense`, ...

Note:

font-size: v-bind(currentFontSize);

https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax

---

## Composition API

- [explain me like a 5](https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api/)

Note:

https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api/

https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

---

## Reactivity

Note:

https://v3.vuejs.org/guide/reactivity-fundamentals.html#declaring-reactive-state

https://v3.vuejs.org/guide/component-provide-inject.html#working-with-reactivity

---

##### demo time

### `ref` vs `reactive`

Note:

http://localhost:3000/en-US/playground

---

##### demo time

### reactive provide/inject

###### [user story: switch lanauge]

Note:

switch language

---

##### demo time

### data-driven dynamic CSS

###### [user story: font for elderly]

Note:

font-size: v-bind(currentFontSize);

---

## meet TailwindCSS

##### and Storybook

- rapid styling with internal UI library

---

## meet GraphQL

##### and villus

- consume API with flexible schema

---

## more

- write programmable SVG
- ensure i18n keys are exhaustive

---

## missing pizzles

- [Vuex 4](https://next.vuex.vuejs.org/)
- SSR [(vite-ssr)](https://v3.vuejs.org/guide/ssr.html#vite-ssr)
- SSG [(vite-ssg)](https://github.com/antfu/vite-ssg)
- [Nuxt 3](https://v3.nuxtjs.org/getting-started/introduction#comparison)

Note:

https://v3.vuejs.org/guide/state-management.html#official-flux-like-implementation

---

## references

- https://v3.vuejs.org/cookbook/
- https://miyauchi.dev/posts/vite-vue3-typescript/
- https://github.com/vincent687/sc-b2c-web-vue3-vite <- demo source

---

## Q & A

---

## Thank You
