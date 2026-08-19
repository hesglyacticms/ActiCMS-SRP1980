interface Env {
  ASSETS: Fetcher;
}

const securityHeaders = {
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'; img-src 'self' data: https://acticms-srp1980.pages.dev https://*.manus-storage.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://acticms-srp1980.pages.dev https://*.manus.computer https://*.manus.im",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

function withSecurityHeaders(response: Response) {
  const headers = new Headers(response.headers);
  Object.entries(securityHeaders).forEach(([name, value]) => headers.set(name, value));
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

const worker: ExportedHandler<Env> = {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404) {
      const url = new URL(request.url);
      const isAssetRequest = url.pathname.includes(".");

      if (url.pathname === "/" || !isAssetRequest) {
        response = await env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      }
    }

    return withSecurityHeaders(response);
  },
};

export default worker;
