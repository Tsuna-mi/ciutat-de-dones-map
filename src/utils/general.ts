import { Biography, SubwayLine, Category } from 'app/types';

export const sortArrayByField = (
  array: Biography[],
  field: 'name' | 'birthDate',
  method: 'asc' | 'desc'
): Biography[] => {
  return [...array].sort((a, b) => {
    const aValue = a[field] || '';
    const bValue = b[field] || '';
    if (aValue < bValue) {
      return method === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return method === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

export const filterByStringInArrayField = (
  array: Biography[],
  field: 'category' | 'subwayLine',
  filterString: SubwayLine | Category
): Biography[] => {
  if (filterString === 'all') return array;
  return array.filter(
    (item) =>
      Array.isArray(item[field]) &&
      (item[field] as (SubwayLine | Category)[]).includes(filterString)
  );
};

export const findPosition = (array: number[], id: number) => {
  if (!id) return;
  const position = array.indexOf(id);
  if (position === -1) {
    throw new Error('El id proporcionado no existe en el array.');
  }
  return position;
};
