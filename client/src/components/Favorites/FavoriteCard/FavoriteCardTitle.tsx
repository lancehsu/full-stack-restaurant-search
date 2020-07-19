import React, { Dispatch, FC } from 'react';
import { TextField, Typography } from '@material-ui/core';

interface FavoriteListTitleProps {
  editMode: boolean;
  favoriteName: string;
  favoriteEditName: string;
  setFavoriteEditName: Dispatch<string>;
  setIsSearchFieldFocus: Dispatch<boolean>;
}
const FavoriteListTitle: FC<FavoriteListTitleProps> = ({
  editMode,
  favoriteName,
  favoriteEditName,
  setFavoriteEditName,
  setIsSearchFieldFocus,
}) => {
  return editMode ? (
    <TextField
      value={favoriteEditName}
      size="medium"
      onChange={(e) => {
        setFavoriteEditName(e.target.value);
      }}
      onFocus={() => {
        setIsSearchFieldFocus(true);
      }}
      onBlur={() => {
        setIsSearchFieldFocus(false);
      }}
    />
  ) : (
    <Typography variant="h4">{favoriteName}</Typography>
  );
};

export default FavoriteListTitle;
