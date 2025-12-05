import { useMemo } from 'react';
import { PREFIX } from '../const';

/**
 * @param componentName - The name of the component.
 * @returns The prefix of the component.
 */
export const usePrefix = (componentName: string) => {
  return useMemo(() => {
    if (!componentName) return PREFIX;
    return `${PREFIX}-${componentName}`;
  }, [componentName]);
};
