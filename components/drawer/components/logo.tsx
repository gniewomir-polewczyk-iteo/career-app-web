import React, {FC} from 'react';
import {Box, SvgIcon} from '@mui/material';
import {SxProps} from '@mui/system';

type PropsType = {
    width: number | string;
    height: number | string;
    color: string;
    sx?: SxProps;
    navBar?: boolean;
};

export const Logo: FC<PropsType> = ({width, sx, height, color, navBar}) => {
    const sxBox: SxProps = navBar
        ? {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        }
        : {};

    return (
        <Box sx={sxBox}>
            <SvgIcon
                sx={sx}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.37387 14.9371C5.24656 15.5681 5.18568 16.2098 5.18568 16.8677C5.18568 22.5355 9.94023 27.1463 15.7796 27.1463C21.6246 27.1463 26.3791 22.5193 26.3791 16.8354C26.3791 14.9155 25.8367 13.0658 24.8238 11.4588C22.4604 13.0982 19.6707 14.0689 16.7483 14.2414C16.3995 14.2738 16.0785 14.2738 15.7796 14.2738C11.6782 14.2738 7.77605 12.6344 4.78716 9.65758L3.08792 7.96424L4.78162 6.26552C7.74284 3.30489 11.6505 1.67627 15.7796 1.67627C15.9789 1.67627 16.1781 1.67627 16.3774 1.69245C20.4069 1.83266 24.1651 3.46667 26.9714 6.28709C29.7997 9.13448 31.3606 12.8771 31.3606 16.8354C31.3606 25.1996 24.3699 31.9998 15.7796 31.9998C7.18934 31.9998 0.204193 25.2103 0.204193 16.8677C0.204193 14.8724 0.613782 12.8878 1.39421 11.0597L5.37387 14.9371ZM10.5137 7.96423C11.8819 8.78771 13.6332 9.4246 15.7775 9.4246C15.9651 9.4246 16.1599 9.42244 16.3155 9.40734L16.4179 9.39979C18.1171 9.30488 19.7532 8.81144 21.1984 7.97448C19.6846 7.09654 17.9599 6.59932 16.1566 6.54054L16.0371 6.53353C15.9502 6.52652 15.8644 6.52922 15.7775 6.52922C13.8834 6.52922 12.1006 7.01942 10.5137 7.96423Z"
                    fill={color}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.332 0L26.9972 3.24861L30.461 6.62341L33.7958 3.3748L30.332 0Z"
                    fill={color}
                />
            </SvgIcon>
        </Box>
    );
};
