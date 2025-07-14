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
  loginButton: {
  padding: "6px 16px",
  borderRadius: "25px",
  fontWeight: 600,
  textTransform: "none",
  transition: "0.3s ease-in-out",
  [theme.breakpoints.up("sm")]: {
    background: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
    color: "#000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    "&:hover": {
      background: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
      transform: "scale(1.05)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    background: "transparent",
    color: "#fff",
    border: "1px solid white",
    padding: "4px 12px",
    "&:hover": {
      background: "rgba(255,255,255,0.1)",
    },
  },
},

}));
