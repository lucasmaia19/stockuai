import { Drawer, Hidden } from '@material-ui/core';
import SidebarNav from './SidebarNav';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles } from '@material-ui/core/styles';
import LocalShipping from '@material-ui/icons/LocalShipping';
import { AccountCircle, Note, OpenWith, PanTool, Store, Work } from '@material-ui/icons';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

  drawer: {
    [theme.breakpoints.up('lg')]:
    {
      width: drawerWidth, flexShrink: 0,
    },
  },
  drawerPaper: {
      width: drawerWidth, 
      backgroundColor: '#ff7700',
      border: 'none'
  },
}));

const pages = [
  {
    title: "Cadastro do Produto",
    href: "/product-register",
    icon: <Work />
  },
  {
    title: "Cadastro de Fornecedor",
    href: "/provider-register",
    icon: <LocalShipping />
  },
  {
    title: "Cadastro de Mercadoria",
    href: "/merchandise-register",
    icon: <Note/>
  },
  {
    title: "Cadastro de Empresa",
    href: "/company-register",
    icon: <BusinessIcon />
  },
  {
    title: "Controle de Acesso",
    href: "/control-access",
    icon: <AccountCircle />
  },
  {
    title: "Movimento de Estoque",
    href: "/stock-movement",
    icon: <OpenWith />
  },
  {
    title: "Estoque",
    href: "/stock",
    icon: <Store />
  },
]

function Sidebar({ open, onClose, variant }) {

  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer variant={variant} anchor="left" open={open} onClose={onClose} classes={{ paper: classes.drawerPaper, }} ModalProps={{ keepMounted: true, }} >
          <SidebarNav pages={pages} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer classes={{ paper: classes.drawerPaper, }} variant="permanent" open={open} >
          <SidebarNav pages={pages} />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Sidebar;