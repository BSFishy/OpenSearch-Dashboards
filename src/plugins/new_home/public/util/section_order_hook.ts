import { useLocalStorage } from 'react-use';
import { SECTIONS } from '../../common';

export const useSectionOrder = () => {
  return useLocalStorage<string[]>('newHome:sectionOrder', [
    SECTIONS[0].id,
    SECTIONS[1].id,
    SECTIONS[2].id,
  ]);
};
