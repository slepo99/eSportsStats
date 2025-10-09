interface CustomHelpers {
  useClickOutside: (
    component: Ref<HTMLElement | null>,
    callback: () => void,
    excludeComponent?: Ref<HTMLElement | null>,
  ) => void;
}

export default function useCustomHelpers(): CustomHelpers {
  const useClickOutside = (
    component: Ref<HTMLElement | null>,
    callback: () => void,
    excludeComponent?: Ref<HTMLElement | null>,
  ): void => {
    if (!component) {
      throw new Error('A target component has to be provided.');
    }

    if (!callback) {
      throw new Error('A callback has to be provided.');
    }

    const listener = (event: MouseEvent): void => {
      if (!component.value) return;

      const target = event.target as Node;
      const path = event.composedPath?.() || [];

      if (
        target === component.value ||
        path.includes(component.value) ||
        (excludeComponent?.value &&
          (target === excludeComponent.value ||
            path.includes(excludeComponent.value)))
      ) {
        return;
      }

      callback();
    };

    onMounted(() => {
      window.addEventListener('click', listener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', listener);
    });
  };

  return { useClickOutside };
}
