import { ImageListItem } from '@mui/material';

export type Props = {
  children: React.ReactNode;
  isActive: boolean;
};
export default function ImageListItemStyled({ children, isActive }: Props) {
  return (
    <ImageListItem
      className={isActive ? 'active' : undefined}
      sx={{
        my: 0.4,
        opacity: 0.3,
        img: {
          borderRadius: 2,
        },
        ':hover': {
          opacity: 1,
          transform: 'scale(1.05)',
          '.MuiBadge-standard': {
            opacity: '1',
          },
        },
        '&.active': {
          opacity: 1,
          '.MuiBadge-standard': {
            opacity: 1,
          },
        },
        '.MuiBadge-standard': {
          opacity: 0,
        },
      }}
    >
      {children}
    </ImageListItem>
  );
}
