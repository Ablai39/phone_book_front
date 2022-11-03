import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error404Page } from '../components/pages'
import RouteList from './route-list';

const SiteRoutes = () => {
    const generatedRoute = RouteList.map(({ key, path, element }) => {
        return (
            <Fragment key={key}>
                <Route path={`${path}`} element={element} />
                <Route path={`ru${path}`} element={element} />
                <Route path={`kz${path}`} element={element} />
                <Route path={`en${path}`} element={element} />
            </Fragment>
        );
    });

    return (
        <Routes>
            <Route key='error-404' path='*' element={<Error404Page />} />
            {generatedRoute}
        </Routes>
    );
}

export default SiteRoutes;
