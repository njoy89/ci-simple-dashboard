import React from 'react';
import ItemsTable from './ItemsTable/ItemsTable';
import LoadingPanel from './LoadingPanel';
import CategoryDetailsModal from './CategoryDetailsModal';

const Main = () => (
    <div className="container">
        <LoadingPanel />
        <ItemsTable />
        <CategoryDetailsModal />
    </div>
);

Main.propTypes = {};

export default Main;
