import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src='https://1.bp.blogspot.com/-zbupgGFYJYY/YNSOtS-mcNI/AAAAAAABA5I/FzqeMkFtVJcjs5AC-PO2nCfW4wDDzPPZgCLcBGAsYHQ/s0/Avatar-Facebook-Taihinhanh-Vn%2B%252829%2529.jpg'
        alt='avatar'
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
