import React from 'react';
import ReactDOM from 'react-dom/client';

const AppLayout = () => {
  return (
    <div>
      List All Components here <br /> Header <br /> Body <br /> Footer 🚀
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
