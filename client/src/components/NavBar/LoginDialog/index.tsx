import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SignupDialog from './SignupDialog';
import { DialogTitle } from '@material-ui/core';

const LoginDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button color="inherit" onClick={(): void => setOpen(true)}>
        Login
      </Button>
      <Dialog open={open} onClose={(): void => setOpen(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Email" type="email" fullWidth />
          <TextField margin="dense" label="Password" type="password" fullWidth />
          <SignupDialog />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={(): void => {
              setOpen(false);
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={(): void => {
              setOpen(false);
            }}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginDialog;
