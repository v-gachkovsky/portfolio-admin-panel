import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';

import {
  AppBar as BaseAppBar,
  Drawer as BaseDrawer,
  Toolbar as BaseToolbar,
} from '@material-ui/core';

import { styledIf, colors } from 'styles';

const drawerWidth = 240;
const drawerZIndex = 1000;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.darkGrey};
  height: 100vh;
  color: ${colors.white}
`;

export const AppBar = styled(BaseAppBar)`
  z-index: ${drawerZIndex + 1};
  transition: all 125ms ease-in-out;
  
  ${styledIf('shift')`
    margin-left: ${drawerWidth}px;
    width: calc(100vw - ${drawerWidth}px) !important;
    transition: all 125ms ease-in-out;
  `};
  
    & .MuiPaper-root {
      margin-left: ${drawerWidth}px;
      width: calc(100vw - ${drawerWidth}px) !important;
      transition: all 125ms ease-in-out;
    }
`;

export const Toolbar = styled(BaseToolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ToolbarTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Drawer = styled(BaseDrawer)`
  z-index: ${drawerZIndex};
  width: ${props => props.open ? drawerWidth : 68}px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow-x: hidden;
  
  transition: all 125ms ease-in-out;
  
  & .MuiPaper-root {
    overflow-x: hidden;
    width: ${props => props.open ? drawerWidth : 68}px;
    transition: all 125ms ease-in-out;
  }
`;

export const DrawerCollapsePanel = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
  // padding-top: 68 (header's height) + padding on the page
  padding: 88px 30px 20px;
`;

export const Link = styled(BaseLink)`
  margin-right: 10px;
`;
