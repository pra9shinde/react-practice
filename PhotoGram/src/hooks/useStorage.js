import React, { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                // Uploading event callback
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                // Error Callback
                setError(err);
            },
            async () => {
                // File uploaded successfully callback
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp;
                collectionRef.add({ url, createdAt });
                setUrl(url);
            }
        );

        return () => {};
    }, [file]);

    return { progress, url, error };
};

export default useStorage;
