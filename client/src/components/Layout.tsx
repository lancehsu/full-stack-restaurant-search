import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      grid: 'none / repeat(12, 1fr)',
      gridGap: theme.spacing(6),
    },
  })
);

const Layout: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
