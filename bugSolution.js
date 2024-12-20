```javascript
// app/middleware.js

export function middleware(req) {
  // This will never run for dynamic segments
  if (req.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('/home', req.url));
  }
}

export const config = {
  matcher: ['/blog/:path*'], // Match the dynamic route
};

// app/page.js

export default function Home() {
  return (
    <div>Home Page</div>
  );
}
// app/blog/[slug]/page.js

export default function BlogPost({params}) {
  return (
    <div>Blog Post: {params.slug}</div>
  );
}
```