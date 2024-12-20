# Next.js 15 App Router: Middleware Not Working With Dynamic Routes

This repository demonstrates a bug in Next.js 15's App Router where middleware does not function correctly with dynamic routes.  The issue is specifically observed when a route segment is dynamic, but the middleware is attempting to access this dynamic segment.

**Steps to Reproduce:**

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/blog/post-1` or `/blog/[slug]`. Note that middleware is not redirecting correctly.

**Expected Behavior:**

Middleware should execute and redirect as specified in the `middleware.js` file.

**Actual Behavior:**

The middleware does not execute, and the default page is rendered.

**Workaround:**

This is a known bug in Next.js 15 and may be addressed in future releases. Until then, workarounds may involve restructuring your routes to avoid dynamic segments within the affected middleware routes.