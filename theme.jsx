import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Back from '../../images/back.png';
// import Stack from '@mui/material/Stack';
// import './webPage.css';
import { styled } from '@mui/material/styles';
//  import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import  './theme.css';


function Theme() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="back">

            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Item>
                        <h1 className="spa-meaning">
                            <br></br>

                            A spa therapy detoxifies the skin, opens up clogged pores and offers the perfect way to<br></br>
                            relax your body,mind and soul.</h1>

                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}
export default Theme;
