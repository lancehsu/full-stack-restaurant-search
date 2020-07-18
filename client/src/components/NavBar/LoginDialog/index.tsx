import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SignupDialog from './SignupDialog';
import { DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/user/actions';

const LoginDialog: FC = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="outlined" color="inherit" onClick={(): void => setOpen(true)}>
        Login
      </Button>
      <Dialog open={open} onClose={(): void => setOpen(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Account"
            type="string"
            fullWidth
            value={account}
            onChange={(e) => {
              setAccount(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
              dispatch(login(account, password));
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
