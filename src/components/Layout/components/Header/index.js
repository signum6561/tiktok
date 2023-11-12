import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: 'lucide:book-a',
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: 'ic:sharp-help-outline',
    title: 'Feedback and help',
  },
  {
    icon: 'icon-park-outline:keyboard',
    title: 'Keyboard shorcuts',
  },
];

const userMenu = [
  {
    icon: 'ri:user-line',
    title: 'View profile',
  },
  {
    icon: 'material-symbols:bookmark-outline-rounded',
    title: 'Favorites',
  },
  {
    icon: 'ic:outline-tiktok',
    title: 'Get Coins',
  },
  {
    icon: 'ph:lightbulb-bold',
    title: 'LIVE Creator Hub',
  },
  {
    icon: 'clarity:cog-line',
    title: 'Settings',
  },
  ...MENU_ITEMS,
  {
    icon: 'ic:outline-login',
    title: 'Log out',
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='Tiktok' />
        </div>
        <TippyHeadless
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder='Search' />
            {/* <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <span className={cx('line-seperate')}></span>
            <button className={cx('search-btn')}>
              <Icon icon='octicon:search-16' fontSize={22} />
            </button>
          </div>
        </TippyHeadless>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button className={cx('upload-btn')} type='outline' size='small' leftIcon='ic:round-add'>
                Upload
              </Button>
              <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                <button className={cx('action-btn')}>
                  <Icon icon='akar-icons:devices' />
                </button>
              </Tippy>
              <button className={cx('action-btn')}>
                <Icon icon='cil:send' />
              </button>
              <button className={cx('action-btn')}>
                <Icon icon='bx:message-detail' />
              </button>
            </>
          ) : (
            <>
              <Button type='text'>Upload</Button>
              <Button type='primary'>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src='https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-51.jpg'
                className={cx('user-avatar')}
                alt='Nguyen Van A'
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
