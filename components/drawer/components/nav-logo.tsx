import React, {FC} from 'react';
import {Link, Stack} from '@mui/material';
import {Logo} from "../../logo";

export const NavLogo: FC = () => {
    return (
        <>
            <Stack direction="row" alignItems={'center'}>
                <Link href="/">
                    <Logo
                        navBar
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        width={35}
                        height={35}
                        color="#ff6500"
                    />
                </Link>
            </Stack>
        </>
    );
};
