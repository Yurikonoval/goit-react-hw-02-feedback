import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ massage }) {
  return (
    <>
      <p className={s.notification}>{massage}</p>
    </>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
