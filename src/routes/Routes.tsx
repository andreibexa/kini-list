import {Suspense} from 'react';
import useStoreState from 'hooks/useStoreState';
import {Route, Routes} from 'react-router-dom';
import Layout from '../layouts/Layout';
import pageLinks from './pageLinks';

export default function CRoutes() {
    useStoreState();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {pageLinks.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={<item.component/>}
                            index={item.index}
                        />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
}
