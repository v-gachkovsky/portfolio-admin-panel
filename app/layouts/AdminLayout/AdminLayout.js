import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  IconButton,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';

import constants, { tabs } from 'appConstants';

import {
  Wrapper,
  AppBar,
  Toolbar,
  ToolbarTitle,
  Drawer,
  DrawerCollapsePanel,
  Content,
  SideBarLink,
  ListItem,
} from './styled';

function AdminLayout({ location: { pathname }, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarMenu = useMemo(
    () => {
      return (
        <List>
          {Object.keys(tabs).map((key) => {
            const {
              title,
              route,
              icon: Icon,
            } = tabs[key];

            return (
              <SideBarLink
                key={key}
                to={route}
              >
                <ListItem
                  button
                  active={pathname === route}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </SideBarLink>
            );
          })}
        </List>
      );
    },
    [pathname]
  );

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <AppBar
        position="fixed"
        shift={isOpen}
      >
        <Toolbar>
          <ToolbarTitle>
            {!isOpen && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap>
              {constants.appTitle}
            </Typography>
          </ToolbarTitle>
          <IconButton
            edge="end"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={isOpen}
      >
        <DrawerCollapsePanel>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerCollapsePanel>
        <Divider />
        {sideBarMenu}
      </Drawer>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
