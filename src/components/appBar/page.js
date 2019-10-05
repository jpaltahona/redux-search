import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../Autocomplete';

function Page(props) {
    const { suggestions, onChangeText, onChangeSelection, text } = props;

        return (
            <Fragment>
               <AppBar position="static">
                    <Toolbar className="appbar">
                        <Typography variant="h6" color="inherit">
                            motor de prmociones
                        </Typography>
                        <Autocomplete 
                            text={text}
                            suggestions={suggestions}
                            onChangeText={onChangeText}
                            onChangeSelection={onChangeSelection}
                        />
                        <AccountCircle />
                    </Toolbar>
               </AppBar>
            </Fragment>
        )

}

export default Page;