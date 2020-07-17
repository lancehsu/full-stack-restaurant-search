import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      width: '100vw',
      display: 'grid',
      grid: 'repeat(10, 1fr) / repeat(12, 1fr)',
      gridGap: theme.spacing(6),
    },
  })
);

const Layout: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
