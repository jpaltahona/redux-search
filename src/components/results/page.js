import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import Typography from '@material-ui/core/Typography';

function Page(props) {
    const { results } = props;
    const isEmpty = results.length === 0;

        return (
            <Fragment>
                <CssBaseline />
                <AppBar />
                <div className="results-page">
                    {isEmpty ? 
                        <Typography variant="h5" component="h3" className="page-message">
                            There are no results
                        </Typography>
                        : 
                        <Typography variant="h5" component="h3" className="page-message">
                            Si hay resultados
                        </Typography>
                    }
                </div>
            </Fragment>
        )
}

export default Page;
