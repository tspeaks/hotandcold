import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';

export function AuralStatus(props) {
=======

export default function AuralStatus(props) {
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}
<<<<<<< HEAD

const mapStateToProps = state => ({
  auralStatus: state.auralStatus
});

export default connect(mapStateToProps)(AuralStatus);
=======
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
