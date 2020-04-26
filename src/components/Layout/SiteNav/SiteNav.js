// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import styles from './SiteNav.module.scss';
import buttonStyles from './SiteNavButton.module.scss';
import SiteNavMenu from './SiteNavMenu/SiteNavMenu';

type Props = {
  isIndex?: boolean,
};

const cn = 'site-nav';
const cx = classNames.bind(styles);

class SiteNav extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      menuExpanded: false
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuExpanded: !prevState.menuExpanded
    }));
  }

  render() {
    const { menuExpanded } = this.state;
    const cx = classNames.bind(styles);
    const btnCx = classNames.bind(buttonStyles);
    const buttonMenuClassName = btnCx({
      [`${cn}-button__menu`]: true,
      [`${cn}-button__menu-close`]: !menuExpanded,
      [`${cn}-button__menu-open`]: menuExpanded
    });

    return (
      <div 
        className={styles[cn]}
      >
        <div className={styles[`${cn}__container`]}>
          <div className={styles[`${cn}__bar`]}>
            <button
              className={buttonStyles[`${cn}-button`]}
              type="button"
              onClick={() => this.toggleMenu()}
            >
            <span className={buttonStyles[`${cn}-button__icon`]}>
              <span 
                className={buttonMenuClassName}
              ></span>
            </span>Menu
            </button>
            <div className={styles[`${cn}__title`]}>
              <h1>
                <a href="/">Victory in Jesus Christ <img src="/media/logo.png" /></a>
              </h1>
            </div>
            <div className={styles[`${cn}__search`]}>
              search
            </div>
          </div>
          <SiteNavMenu menuExpanded={menuExpanded}  />
        </div>
      </div>
    );
  }
};

export default SiteNav;
