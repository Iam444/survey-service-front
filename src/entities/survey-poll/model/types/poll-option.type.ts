import type { IPollElectionsOptionNestedDTO, IPollPlainOptionNestedDTO } from '@/shared/api/types';

export type TPollPlainOption = IPollPlainOptionNestedDTO;
export type TPollElectionsOption = IPollElectionsOptionNestedDTO;
export type TPollOption = TPollPlainOption | TPollElectionsOption;
