import React from 'react';
import { Outlet } from 'react-router-dom';
import DFooter from '../Dcomponents/DFooter';
import DHeader from '../Dcomponents/DHeader';

const Dashboard = () => {

  return (
    <div className='Dashboard'>
      <DHeader />
      <Outlet />
      <DFooter />
    </div>
  );
}

export default Dashboard;
