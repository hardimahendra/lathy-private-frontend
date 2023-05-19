import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <div className="container-404">
        <div className="not-found">
          <h1>404</h1>
          <h3>Oppsss</h3>
          <h5>Pages Dalam Proses Pengembangan </h5>
          <h5>Pages is still under development</h5>
        <div className="back-to-home">
            <Link to="/home">Back Home</Link>
        </div>
        </div>
      </div>
    </>
  );
}
