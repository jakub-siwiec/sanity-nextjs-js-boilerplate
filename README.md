# Table of Contents

1. [Next.js and Sanity](#nextjsandsanity)
2. [Next.js](#nextjs)

# Next.js and Sanity

In order to install monorepo from Next.js and Sanity dependencies for development mode run the command:

```
npm install --workspaces=studio && npm install --only=dev
```

Remember to create `.env.development` file in `./studio/` with environmental variables for your project:

```
SANITY_STUDIO_API_PROJECT_ID=
SANITY_STUDIO_API_DATASET=
```

Now you can run Next.js app and Sanity studio locally with the command:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see Next.js app and [http://localhost:3333](http://localhost:3333) to enter local Sanity Studio in development environment.

You can also enter [http://localhost:3000/admin](http://localhost:3000/admin) to see Sanity Studio hosted on Sanity.io servers. However, in order to do that you need to deploy Sanity Studio first. In order to commit changes in Sanity.io you also must deploy it. Do it using this command from the main directory:

```
npm run sanity-deploy
```

When you run install in the production server use this command:

```
npm install --production
```

Remember about setting `SANITY_STUDIO_API_PROJECT_ID` and `SANITY_STUDIO_API_DATASET` environmental variables.

# Next.js <a name="nextjs"></a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
