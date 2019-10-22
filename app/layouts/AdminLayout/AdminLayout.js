import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Toolbar,
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
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from '@material-ui/icons';

import routes from 'constants/routes';

import { Wrapper, AppBar, Drawer, DrawerCollapsePanel, Content, Link } from './styled';

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
            Portfolio Admin Panel
          </Typography>
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
          {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
