import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle } from '@material-ui/core';

const SignupDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  return (
    <>
      <Button color="inherit" style={{ margin: '0.5em 0.2em' }} onClick={(): void => setOpen(true)}>
        Register
      </Button>
      <Dialog open={open} onClose={(): void => setOpen(false)}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Account"
            type="string"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            label="Name"
            type="name"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SignupDialog;
