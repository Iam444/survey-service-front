import { Select } from '@base-ui/react/select';
import { Typography } from '@/shared/ui/typography';
import type { FC } from 'react';
import type { TSelectValueProps } from './SelectValue.props';

export const SelectValue: FC<TSelectValueProps> = (props) => {
    return <Select.Value render={<Typography type="text" size={props.size} />} {...props} />;
};
