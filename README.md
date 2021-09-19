# Lab: 37 - Welcome to React, Next.js & TailwindCSS

## Overview

React is great! And though it does A LOT, it's not a full framework. In other words, many common tasks are not handled out of the box by React. So it's up to us devs to make some decisions about how to use React in combination with other tools.

One great "stack" is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a `Cookie Stand Admin` app using [Next.js](https://nextjs.org/){:target="\_blank"} and style using [Tailwind CSS](https://tailwindcss.com/){:target="\_blank"}.

## Feature Tasks and Requirements

- The `spec` for lab is screen shot of [Cookie Stand Admin Version 1](./cookie-stand-admin-version-1.png){:target="\_blank"}
- `pages/Index.js` should...
  - Have `<Head>` component with page title set to `Cookie Stand Admin`
  - Have a `header` component that matches spec.
  - Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
  - Have a `<footer>` component that matches spec.
- Style app using TailwindCSS utility classes.

## Implementation Notes

- > npx create-next-app --example with-tailwindcss cookie-stand-admin
- strip out unused files
  - Won't break if they get left in, but a good practice to remove stuff you're not using.
- Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack){:target="\_blank"}

&nbsp;

**PR Link**: <https://github.com/YAHIAQOUS/cookie-stand-admin/pull/1>

&nbsp;

# Lab: 38 - Cookie Stand Admin Version 2

## Overview

Your job is to continue work on `Cookie Stand Admin` app using [Next.js](https://nextjs.org/){:target="\_blank"} and style using [Tailwind CSS](https://tailwindcss.com/){:target="\_blank"}.

## Feature Tasks and Requirements

- The `specs` for lab are screen shots [Cookie Stand Admin Version 2](./cookie-stand-admin-version-2.png){:target="\_blank"} and [Cookie Stand Admin No Stands](./cookie-stand-admin-no-stands.png){:target="\_blank"}
- `pages/Index.js` should return top level component `<CookieStandAdmin>`
- `<CookieStandAdmin>` details...
  - Have a `<Head>` component.
  - Have a custom `<Header>` component that matches spec.
  - Have a `<main>` component.
  - Within `<main>` have custom `<CreateForm>` and `<ReportTable>` components.
  - Have a custom `<Footer>` component that matches spec.
  - Import time slot data from supplied `data.js` file.
- `<Head>` should set page title `Cookie Stand Admin`
- `<Header>` component should have Next `<Link>` to `overview` page.
- `<CreateForm>` component details...
  - Receive an `onCreate` function to be called when form is submitted.
  - `onCreate` should be passed argument object representing new cookie stand.
    - Object should have `location` property.
    - Object should have `hourly_sales` property with hard coded `[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]`
- `<ReportTable>` details...
  - should receive `hours` on props that is an array cookie stand hours of operation.
  - should receive `reports` on props that is an array all cookie stand objects.
  - If `reports` is empty then render `<h2>No Cookie Stands Available</h2>`
  - If `reports` is not empty then render a `table` with `thead`,`tbody` and `tfoot` components.
  - Component should render to match spec.
  - Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot.
- `<Footer>` component details...
  - Should receive `reports` array on props.
  - Should display `X Locations World Wide` where `X` is number of cookie stands.
- `<Header>`,`<Footer>`,`<CreateForm>` and `<ReportTable>` should each be in own file inside top level `components` folder.
- Those components should be imported into `Index.js`
- `Overview` page details...
- should live in `pages/overview.js`
- should render `<Link href="/"><a>Return to Main page</a></Link>`
- Style all components using TailwindCSS utility classes to match spec.

## Implementation Notes

- Continue work in `cookie-stand-admin` repository
- **IMPORTANT** Complete version 1 tasks before moving to version 2 features.
- Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack){:target="\_blank"}

&nbsp;

**PR Link**: <https://github.com/YAHIAQOUS/cookie-stand-admin/pull/2>

&nbsp;

**Deployment Link**: <https://cookie-stand-admin-o40dk8qoa-snacks.vercel.app/>

&nbsp;
&nbsp;

&nbsp;

## Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
