export default function useHeader() {
  const { locale, locales, t } = useI18n();
  const localePath = useLocalePath();
  const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
  });

  const routes = computed(() => [
    { name: t('mainHeader.links.matches'), path: localePath('/matches') },
    { name: t('mainHeader.links.heroes'), path: localePath('/heroes') },
    { name: t('mainHeader.links.players'), path: localePath('/players') },
    { name: t('mainHeader.links.teams'), path: localePath('/teams') },
  ]);
  return {
    availableLocales,
    routes,
  };
}
