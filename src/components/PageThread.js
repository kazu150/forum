import Firebase from 'firebase/app';
import React from 'react';
import { useParams } from 'react-router-dom';
import FormResponse from './FormResponse';
import Main from './Main';

const PageThread = () => {
    const { threadId } = useParams();

    return (
        <Main>
            <h1>{'Thread'}</h1>
            <FormResponse threadId = {threadId} />
        </Main>
    );
};

export default PageThread;