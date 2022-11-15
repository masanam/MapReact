import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as CaretIcon } from './../icons/caret.svg';
import { ReactComponent as CogIcon } from './../icons/cog.svg';
import { ReactComponent as ChevronIcon } from './../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './../icons/arrow.svg';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <h2 class="logo">BPSDM Dashboard</h2>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem><Link to='/'>Home</Link></DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Pelatihan
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Penyuluhan
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="training">
            Pendidikan
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'training'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Pendidikan</h2>
          </DropdownItem>
          <DropdownItem><Link to='/pendidikan'>Satuan Pendidikan</Link></DropdownItem>
          <DropdownItem><Link to='/pendidikan'>Peserta Pendidikan</Link></DropdownItem>
          <DropdownItem><Link to='/pendidikan'>Jenis Pendidikan</Link></DropdownItem>
          <DropdownItem><Link to='/pendidikan'>Tenaga Pendidikan</Link></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Pelatihan</h2>
          </DropdownItem>
          <DropdownItem><Link to='/pelatihan'>Satuan Pelatihan</Link></DropdownItem>
          <DropdownItem><Link to='/pelatihan'>Peserta Pelatihan</Link></DropdownItem>
          <DropdownItem><Link to='/pelatihan'>Jenis Pelatihan</Link></DropdownItem>
          <DropdownItem><Link to='/pelatihan'>Tenaga Pelatihan</Link></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Penyuluhan</h2>
          </DropdownItem>
          <DropdownItem><Link to='/penyuluhan'>Satuan Penyuluhan</Link></DropdownItem>
          <DropdownItem><Link to='/penyuluhan'>Peserta Penyuluhan</Link></DropdownItem>
          <DropdownItem><Link to='/penyuluhan'>Jenis Penyuluhan</Link></DropdownItem>
          <DropdownItem><Link to='/penyuluhan'>Tenaga Penyuluhan</Link></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavigationBar;