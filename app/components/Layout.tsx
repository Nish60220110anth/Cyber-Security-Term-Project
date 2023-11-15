import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar, Box, Drawer, Grid, IconButton, InputBase, List, ListItemButton,
    ListItemIcon, ListItemText, SpeedDial, SpeedDialAction, Toolbar, Typography, alpha, styled
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { Add, ArrowLeft, ArrowRight, AutoAwesomeMosaic, ThreeDRotationSharp } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

class DrawerProps {
    href: string = "";
    title: string = "";
    tooltipTitle: string = "";
    icon: React.ReactNode = <></>;
    description: string = "";

    constructor(href: string, title: string, tooltipTitle: string, icon: React.ReactNode, description: string = "some") {
        this.href = href;
        this.title = title;
        this.tooltipTitle = tooltipTitle;
        this.icon = icon;
    }
}

const drawerProps: DrawerProps[] = [
    new DrawerProps("/content/Default", "Default User Accounts", "Default User Accounts", <ArrowRight />),
    new DrawerProps("/content/SpecificError", "Specific Error Message", "Specific Error Message", <ArrowRight />),
    new DrawerProps("/content/UnpublishedURL", "Unpublished URLS", "Unpublished URLS", <ArrowRight />),
    new DrawerProps("/content/ListDirectory", "List Directory", "List Directory", <ArrowRight />),
    new DrawerProps("/content/ErrorXSS", "Error XSS", "Error based XSS attack", <ArrowRight />),
];

const Layout = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpen(open);
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {drawerProps.map((value, index) => (
                    <Link key={index} href={value.href}>
                        <ListItemButton alignItems="flex-start" sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }} className="text-black hover:text-white hover:bg-black transition-colors
                        delay-75 ease-in">
                            <ListItemIcon className="hover:text-white hover:animate-pulse delay-75">
                                {value.icon}
                            </ListItemIcon>
                            <ListItemText primary={value.title} primaryTypographyProps={{
                                ml: -3
                            }} sx={{ mb: 0 }}>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                }}>
                                    {value.description}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                ))
                }
            </List>
        </Box>
    );

    return (
        <Grid container={true} direction="column">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">

                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                            <Link href="/">
                                <img src="/icon.ico" alt="icon" width="32" height="32" />
                            </Link>
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                            fontWeight="700">
                            Cybersecurity
                        </Typography>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Link color="inherit" className="text-white bg-black p-2
                        hover:text-black hover:bg-white transition-colors delay-150 ease-in m-1 rounded-md"
                            href="/docs">Docs</Link>
                        <Link color="inherit" className="text-white bg-black p-2
                        hover:text-black hover:bg-white transition-colors delay-150 ease-in m-1 rounded-md"
                            href="/examples">Examples</Link>
                        <Link color="inherit" className="text-white bg-black p-2
                        hover:text-black hover:bg-white transition-colors delay-150 ease-in m-1 rounded-md"
                            href="/resources">Resources</Link>
                        <Link color="inherit" className="text-white bg-black p-2
                        hover:text-black hover:bg-white transition-colors delay-150 ease-in m-1 rounded-md"
                            href="/cookie">Cookie</Link>

                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <AutoAwesomeMosaic />
                        </IconButton>

                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>

                    </Toolbar>
                </AppBar>
            </Box>
            <Grid item={true} xs={12}>
                {children}
            </Grid>

            <SpeedDial icon={<Add
                sx={{
                    color: "black", ":hover": {
                        color: "white"
                    }
                }}
            />} ariaLabel="Actions"
                sx={{
                    position: 'fixed', bottom: 16, right: 16, color: "inherit",
                }}>

                <SpeedDialAction key="back" icon={<ArrowLeft sx={{
                    color: "black", ":hover": {
                        color: "white"
                    }
                }} />}

                    sx={{ backgroundColor: "black" }}
                    tooltipTitle="Backward"
                    onClick={() => {

                        router.back();
                    }
                    }
                />

                <SpeedDialAction key="front" icon={<ArrowRight sx={{
                    color: "black", ":hover": {
                        color: "white"
                    },
                }} />}

                    sx={{ backgroundColor: "black" }}
                    tooltipTitle="Forward"
                    onClick={() => {

                        router.forward();
                    }
                    }
                />
            </SpeedDial>
        </Grid>
    );
}

export default Layout;