import * as React from 'react';
import './style.css';
import { Paginator } from './Paginator';

export default function App() {
  const [pages, setPages] = React.useState(20);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {}, [pages]);
  return (
    <div>
      <h1>Paginator</h1>
      <p>total pages</p>
      <p>
        <input value={pages} onChange={(e: any) => setPages(e.target.value)} />
      </p>
      <p>
        <p>Go to Page</p>
        <input
          value={page}
          onChange={(e: any) => setPage(Number(e.target.value))}
        />
      </p>
      <br />
      <Paginator pages={pages} page={page} setPage={setPage} />
    </div>
  );
}
