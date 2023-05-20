import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './header.scss';

export const Header = () => {
  const currentPath = useLocation();
  const finalPath = currentPath.pathname.replace('/', '');
  const [activeItem,setActiveItem] = useState(finalPath);

  const navigate = useNavigate();

  const handleClick = (e,{name}) => {
    setActiveItem(name)
    navigate(`/${name}`)
  }

  return (
    <div className='header-menu'>
      <Menu secondary>
          <Menu.Item 
              name='inicio' 
              active={activeItem === 'inicio'} 
              onClick={handleClick}
          />
          <Menu.Item 
              name='series' 
              active={activeItem === 'series'} 
              onClick={handleClick}
          />
          <Menu.Item 
              name='comics' 
              active={activeItem === 'comics'} 
              onClick={handleClick}
          />
      </Menu>
    </div>
  )
}
