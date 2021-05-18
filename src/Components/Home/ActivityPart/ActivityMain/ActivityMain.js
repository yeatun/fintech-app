import React from 'react';
import Action from './Action';
import RecentActivity from './RecentActivity';

const ActivityMain = () => {
    return (
        <div>
                  <main style={{height:'800px'}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
               <Action></Action>
            </div>
            <div className="col-md-6">
               <RecentActivity></RecentActivity>
            </div>
        </main>
        </div>
    );
};

export default ActivityMain;