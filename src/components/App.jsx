import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader, PrivateRoute, RestrictedRoute } from 'components';
import { getLastUser } from 'redux/authOperations';
import { useEffect } from 'react';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const LoginForm = lazy(() => import('pages/LoginForm'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

const App = () => {
    const dispatch = useDispatch();
    const isShowLoader = useSelector(state => state.auth.isGettingUser);

    useEffect(() => {
        dispatch(getLastUser());
    }, [dispatch]);

    return (
        <div className="app">
            {isShowLoader ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="register"
                                element={
                                    <RestrictedRoute>
                                        <RegisterForm />
                                    </RestrictedRoute>
                                }
                            />
                            <Route
                                path="login"
                                element={
                                    <RestrictedRoute>
                                        <LoginForm />
                                    </RestrictedRoute>
                                }
                            />
                            <Route
                                path="contacts"
                                element={
                                    <PrivateRoute>
                                        <Contacts />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Suspense>
                </>
            )}
        </div>
    );
};

export default App;
