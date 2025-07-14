import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    marginLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      padding: '0 16px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
    borderRight: 'none',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logoText: {
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '1px',
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
