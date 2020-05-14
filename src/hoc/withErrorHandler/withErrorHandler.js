import React, {useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponenet, axios) => {
    return props => {
        const [error, setError] = useState(null);
        
        const reqInterceptor = axios.interceptors.response.use(req => {
            setError(null);
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
        });

        // Double check this unmount, it might not work
        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal show={error}
                modalClosed={errorConfirmedHandler}>
                    {error? error.message: null} 
                </Modal>
                <WrappedComponenet {...props}/>
            </Aux>
        );
    }
}

export default withErrorHandler;