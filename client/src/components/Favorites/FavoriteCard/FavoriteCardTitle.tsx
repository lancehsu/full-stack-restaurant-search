import React, { FC, useEffect, useState } from 'react';
import { Input, Typography } from '@material-ui/core';

interface FavoriteListTitleProps {
  editMode: boolean;
  favoriteName: string;
  selfEditName: (newName: string) => void;
}
const FavoriteListTitle: FC<FavoriteListTitleProps> = ({
  editMode,
  favoriteName,
  selfEditName,
}) => {
  const [isSearchFieldFocus, setIsSearchFieldFocus] = useState<boolean>(false);
  const [favoriteEditName, setFavoriteEditName] = useState<string>(favoriteName);

  useEffect(() => {
    const pressEnterCallback = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        selfEditName(favoriteEditName);
      }
    };

    if (isSearchFieldFocus) {
      window.addEventListener('keypress', pressEnterCallback);
      return () => window.removeEventListener('keypress', pressEnterCallback);
    }
  }, [isSearchFieldFocus, favoriteEditName]);

  return editMode ? (
    <Input
      value={favoriteEditName}
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
