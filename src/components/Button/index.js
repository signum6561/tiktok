import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  className,
  disabled = false,
  rounded = false,
  type,
  size,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (href) {
    props.href = href;
    Comp = 'a';
  } else {
    props.to = to;
    Comp = Link;
  }
  const classes = cx('wrapper', type, size, {
    [className]: className,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <Icon className={cx('icon')} icon={leftIcon} />}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <Icon className={cx('icon')} icon={rightIcon} />}
    </Comp>
  );
}

export default Button;
