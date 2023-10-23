import React, {useState} from 'react';
import {Stack, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type Props = {
    title?: string;
    children: React.ReactNode;
};

export const DrawerSection: React.FC<Props> = (props) => {
    const {title, children} = props;
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
    };
    return (
        <Stack direction="column">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{p: '12px', cursor: 'pointer'}}
                onClick={handleToggle}
            >
                <Typography
                    variant="subtitle1"
                    sx={{color: 'primary.contrastText', textTransform: 'uppercase'}}
                >
                    {title}
                </Typography>
                {expanded ?
                    <ExpandLessIcon sx={{color: 'primary.contrastText'}}/> :
                    <ExpandMoreIcon sx={{color: 'primary.contrastText'}}/>
                }
            </Stack>
            {expanded && children}
        </Stack>
    );
};
