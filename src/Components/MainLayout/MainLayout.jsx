import React from 'react';
import Header from '../Custom/Header/Header';

const MainLayout = ({children}) => {
    return (
        <div className>
           <Header/> 
           {children}
        </div>
    );
};

export default MainLayout;