import React from 'react';
import FormThread from './FormThread';
import Main from './Main';

const PageHome = () => {
    return(
        <Main>
            <h1>{'Home'}</h1>
            <FormThread />
        </Main>
    );
}

export default PageHome;