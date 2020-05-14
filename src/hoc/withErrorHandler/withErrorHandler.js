import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import useHttpErrorHandler from '../../hooks/http-error-hander';

const withErrorHandler = (WrappedComponenet, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal show={error}
                modalClosed={clearError}>
                    {error? error.message: null} 
                </Modal>
                <WrappedComponenet {...props}/>
            </Aux>
        );
    }
}

export default withErrorHandler;