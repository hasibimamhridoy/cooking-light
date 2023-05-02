import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tric = () => {
    const {tric} = useLoaderData()
    return (
        <div>
            tric
        </div>
    );
};

export default Tric;