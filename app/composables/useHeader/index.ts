export default function useHeader() {
  const { locale, locales, t } = useI18n();
  const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
  });

  const routes = computed(() => [
    { name: t('mainHeader.links.matches'), path: '/matches' },
    { name: t('mainHeader.links.heroes'), path: '/heroes' },
    { name: t('mainHeader.links.players'), path: '/players' },
    { name: t('mainHeader.links.teams'), path: '/teams' },
  ]);
  return {
    availableLocales,
    routes,
  };
}
