export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    timeout: 15000,
     onRequest({ request }) {
       if (import.meta.client) {
        checkLimit()
        incrementCounter()
      }
    }
  });
  nuxtApp.provide("api", api);
});
