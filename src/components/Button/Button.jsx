import PropTypes from 'prop-types';
import ButtonStyle from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={ButtonStyle.button} onClick={onClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
