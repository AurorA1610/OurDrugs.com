import React from 'react';
import { Container } from 'react-bootstrap';
import useStores from '../../../hooks/useStores';
import Store from '../Store/Store';

const Stores = () => {
    const [stores, setStores] = useStores([]);
    return (
        <div>
            <h1 className="mb-5 p-4 text-success fw-bold">Popular Medicine Stores In Banghladesh</h1>
            <Container>
                {
                    stores.map(store => <Store
                                                key={store.id} 
                                                store={store}
                                            ></Store>)
                }
            </Container>
        </div>
    );
};

export default Stores;