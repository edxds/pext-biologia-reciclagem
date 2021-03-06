import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash-icon.svg';
import { ReactComponent as ChecklistIcon } from '../../assets/icons/checklist-filled-icon.svg';
import { ReactComponent as TruckIcon } from '../../assets/icons/truck-icon.svg';
// import './styles/progress-bar.scss';
import styles from './styles/progress-bar.module.scss';

const ProgressBarItem = ({ onClick, sectionId, children, id }) => {
  const handleClick = () => {
    onClick(sectionId);
  };

  return (
    <div
      className={styles.itemContainer}
      id={`progress-header-item-${id}`}
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className={styles.itemIcon} id={`progress-item-icon-${id}`}>
        {children}
      </div>

      <div className={styles.itemProgress}>
        <div
          className={`${styles.itemProgress} ${styles.active}`}
          id={`progress-item-progress-${id}`}
        />
      </div>
    </div>
  );
};

ProgressBarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const ProgressBar = ({ show, handleClick, ...props }) => {
  const showClassname = show ? styles.show : '';

  return (
    <div className={`${styles.container} ${showClassname}`} {...props}>
      <ProgressBarItem onClick={handleClick} sectionId="#section-a" id="a">
        <TrashIcon />
      </ProgressBarItem>

      <ProgressBarItem onClick={handleClick} sectionId="#section-b" id="b">
        <ChecklistIcon style={{ marginBottom: 3 }} />
      </ProgressBarItem>

      <ProgressBarItem onClick={handleClick} sectionId="#section-c" id="c">
        <TruckIcon style={{ marginLeft: 2 }} />
      </ProgressBarItem>
    </div>
  );
};

ProgressBar.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProgressBar;
