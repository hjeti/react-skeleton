import { connect } from 'react-redux';

const withDeviceState = () => WrappedComponent =>
  connect(({ app }) => ({
    deviceState: app.deviceState,
  }))(WrappedComponent);

export default withDeviceState;
