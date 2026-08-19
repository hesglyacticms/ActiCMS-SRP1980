interface Env {
  ASSETS: Fetcher;
}

const worker: ExportedHandler<Env> = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status === 404) {
      const url = new URL(request.url);
      const isAssetRequest = url.pathname.includes(".");

      if (url.pathname === "/" || !isAssetRequest) {
        return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      }
    }

    return response;
  },
};

export default worker;
