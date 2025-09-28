export function useApiFetch<T>(url: string, options?: any) {
  const config = useRuntimeConfig();
  if (import.meta.client) {
    checkLimit();
    incrementCounter();
  }
  return useFetch<T>(url, {
    baseURL: config.public.apiBase,
    timeout: 15000,
    ...options,
  });
}
