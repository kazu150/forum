import Firebase from 'firebase/app';
import { useState } from 'react';

export const useCreateResponse = () => {
    const [loading, setLoading] = useState(false);

    const createResponse = async ({ text, threadId, usename }) => {
        if(loading) return;

        setLoading(true);

        const now = Firebase.firestore.Timestamp.now();

        const threadRef = Firebase.firestore().collection('threads').doc(threadId);

        await threadRef.update({
            responseCount: Firebase.firestore.FieldValue.increment(1),
            updatedAt: now,
        });

        const responseRef = threadRef.collection('responses').doc();

        await responseRef.set({
            createdAt: now,
            updatedAt: now,
            text,
            threadId,
            usename,
        });

        setLoading(false);
    }

    return [createResponse, loading];
}