import { Badge, BadgeProps } from '@mui/material';
import React from 'react';

type Props = BadgeProps & {
  children: React.ReactNode;
};

export default function BadgeStyled({ children, badgeContent }: Props) {
  return (
    <Badge
      badgeContent={badgeContent}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        '& .MuiBadge-badge': {
          right: '22%',
          bottom: '20%',
        },
      }}
    >
      {children}
    </Badge>
  );
}
