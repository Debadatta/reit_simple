import React from 'react';
import PropTypes from 'prop-types';

function isPromise(val) {
  return val && typeof val.then === 'function';
}

export default class ActiveForm extends React.Component {
  state = { loading: false };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit = ev => {
    if (this.props.onSubmit && !this.state.loading) {
      var handler = this.props.onSubmit(ev);
      if (isPromise(handler)) {
        this.setState({ loading: true });
        handler.then(
          v => {
            if (this._isMounted) { this.setState({ loading: false }); }
            return v;
          },
          e => {
            if (this._isMounted) { this.setState({ loading: false }); }
            throw e;
          }
        );
      }
    }
    ev.preventDefault();
  };

  renderActionButtons() {
    let buttons, submitButton, cancelButton, deleteButton;

    if (typeof this.props.submitButton === 'function') {
      submitButton = this.props.submitButton(this.state.loading);
    } else {
      submitButton = (
        <button type="submit" className="btn btn-primary" disabled={this.state.loading || this.props.disabled}>
          {this.state.loading ? '...' : this.props.submitButton}
        </button>
      );
    }

    if (this.props.onCancel) {
      cancelButton = (
        <a className="btn btn-decline" onClick={this.props.onCancel}>
          Cancel
        </a>
      );
    }

    if (this.props.onDelete) {
      deleteButton = (
        <a className="btn btn-delete delete-btn-active-form" onClick={this.props.onDelete}>
          Delete
        </a>
      );
    }

    if (this.props.reverseButtons) {
      buttons = (
        <div className={this.props.activeFormButtonSpace}>
          {cancelButton}
          {submitButton}
        </div>
      )
    } else {
      buttons = (
        <div className={this.props.activeFormButtonSpace}>
          {submitButton}
          {cancelButton}
          {deleteButton}
        </div>
      )
    }

    return (
      <div className="form-group">
        {buttons}
      </div>
    );
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit} noValidate={this.props.noValidate}>
        <div className="container-fluid">
          {this.props.children}
          {this.renderActionButtons()}
        </div>
      </form>
    );
  }
}

ActiveForm.defaultProps = {
  disabled: false,
  reverseButtons: false,
  submitButton: "Save Changes"
};

ActiveForm.propTypes = {
  activeFormButtonSpace: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
  submitButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
