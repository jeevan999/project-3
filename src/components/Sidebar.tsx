import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Menu, X, ChevronRight, Home, Settings, Users, Mail, Bell } from 'lucide-react';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, onClick }) => (
  <ListItem disablePadding>
    <ListItemButton onClick={onClick}>
      <ListItemIcon sx={{ minWidth: 40 }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

const NestedSidebar: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        left: drawerWidth,
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <DrawerHeader>
      <Typography variant="h6" noWrap component="div">
        Details
      </Typography>
      <IconButton onClick={onClose}>
        <X size={20} />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      <SidebarItem icon={<Bell size={20} />} text="Notifications" />
      <SidebarItem icon={<Mail size={20} />} text="Messages" />
      <SidebarItem icon={<Settings size={20} />} text="Preferences" />
    </List>
  </Drawer>
);

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showNested, setShowNested] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Main Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <IconButton onClick={() => setIsOpen(false)} sx={{ display: { sm: 'none' } }}>
            <X size={20} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem 
            icon={<Users size={20} />} 
            text="Team Members"
            onClick={() => setShowNested(true)}
          />
          <SidebarItem 
            icon={<ChevronRight size={20} />} 
            text="More Options"
            onClick={() => setShowNested(true)}
          />
        </List>
        <Divider />
        <List>
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </List>
      </Drawer>

      {/* Nested Drawer */}
      <NestedSidebar open={showNested} onClose={() => setShowNested(false)} />

      {/* Toggle Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsOpen(true)}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          display: isOpen ? 'none' : 'flex',
          zIndex: (theme) => theme.zIndex.drawer + 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <Menu size={20} />
      </IconButton>
    </Box>
  );
};

export default Sidebar;