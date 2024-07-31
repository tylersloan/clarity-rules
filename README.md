# Clarity Rules
### What is the purpose of a rule?

One of the primary workflow’s on Clarity’s school-side product is the ability to review applications submitted by a household. A household will submit financial information, demographic data, and documents to support their application - all of which must be reviewed with the intention of proposing an award for that household that’s fit for their financial background.

Rules is an automation tool that helps schools identify patterns in applications and automatically take action on those applications, like proposing an award for example. We are building a specific version of rules for document requests. Schools will be able to set up rules using this feature on the “backend” of the product. If a submitted application (to that school) meets the rule condition (described below), then execute the action (described below).


[View my technical specification Google doc here](https://docs.google.com/document/d/1PjOkwtvmoq5jzlvF-FF1H0PG2enERwMAhT8Pbe4cV_g/edit?usp=sharing)

[View the demo in production (via vercel)](https://clarity-rules.vercel.app/)


## Remix SPA App

This project was bootstrapped with [Remix SPA Mode](https://remix.run/docs/en/main/guides/spa-mode)

## Setup

To get started, install dependencies.

```shellscript
npm install
```

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
npm run dev
```

## Production

When you are ready to build a production version of your app, `npm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
npm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
npm run preview
```

> [!IMPORTANT]
>
> `vite preview` is not designed for use as a production server
