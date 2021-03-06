import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserProfile extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
    }).isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillReceiveProps(nextProps) {
    const {
      user: { username, lastName, firstName },
    } = nextProps;

    this.setState({
      username,
      firstName,
      lastName,
    });
  }

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { username, firstName, lastName } = this.state;
    const { open, onClose, editUser } = this.props;

    return (
      <Dialog maxWidth='xs' open={open} onClose={onClose}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            required
            label='Username'
            placeholder='Type your username ...'
            name='username'
            margin='normal'
            value={username}
            onChange={this.handleInputChange}
          />
          <TextField
            fullWidth
            label='First name'
            placeholder='Type your first name ...'
            name='firstName'
            margin='normal'
            value={firstName}
            onChange={this.handleInputChange}
          />
          <TextField
            fullWidth
            label='Last name'
            placeholder='Type your last name ...'
            name='lastName'
            margin='normal'
            value={lastName}
            onChange={this.handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={() => {
              editUser(this.state);
              onClose();
            }}
            color='primary'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default UserProfile;
