import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';

import routes from 'constants/routes';
import { tabs } from 'constants/tabs';

import { Wrapper, AppBar, Toolbar, ToolbarTitle, Drawer, DrawerCollapsePanel, Content, Link } from './styled';

function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

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
              Portfolio: Admin Panel
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
        <List>
          {Object.keys(tabs).map((key) => {
            const Icon = tabs[key].icon;

            return (
              <ListItem button key={key}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={tabs[key].title} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Content>
        <Link to={routes.login}>
          Login
        </Link>
        <Link to={routes.dashboard}>
          Dashboard
        </Link>
        {children}
      </Content>
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
