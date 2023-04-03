import React = require('react');

export const Paginator = ({
  pages,
  page,
  setPage,
}: {
  pages: number;
  page: number;
  setPage: (e: any) => void;
}) => {
  const [listPages, setListPages] = React.useState([]);

  React.useEffect(() => {
    let begin = [];
    let middle = [];
    let end = [];
    if (page < 5) {
      if (pages > 0) begin[0] = 1;
      if (pages > 1) begin[1] = 2;
      if (pages > 2) begin[2] = 3;
      if (pages > 3) begin[3] = 4;
      if (pages > 4) begin[4] = 5;

      if (pages === 6 && page >= 4) begin[5] = 6;

      if (pages > 5) end[0] = 6;

      if (pages > 6) end[0] = '...';
      if (pages > 6) end[1] = pages;
    } else if (page >= 5 && page < pages - 3) {
      end = [];
      begin = [];
      begin[0] = 1;

      if (page - 1 > 3) begin[1] = '...';

      if (page - 1 > 1) middle[0] = page - 1;
      if (page - 1 > 2) middle[1] = page;
      if (page - 1 > 3) middle[2] = page + 1;

      if (page - 1 > 3 && page < pages - 2) end[0] = '...';
      if (page - 1 > 3 && page < pages) end[1] = pages;
    } else if (page <= pages) {
      begin = [];
      middle = [];
      end = [];

      if (pages > 6) {
        begin[0] = 1;
        begin[1] = '...';
      }

      if (pages - 4 <= pages) end[0] = pages - 4;
      if (pages - 3 <= pages) end[1] = pages - 3;
      if (pages - 2 <= pages) end[2] = pages - 2;
      if (pages - 1 <= pages) end[3] = pages - 1;
      end[4] = pages;
    }

    console.log(begin, middle, end);

    setListPages([...begin, ...middle, ...end].filter((e) => e));
  }, [page, pages]);

  const handleSelectPage = (page: any) => {
    if (page !== '...') {
      setPage(Number(page));
    }
  };

  return (
    <div>
      <ul>
        <li
          style={{ visibility: page > 1 ? 'visible' : 'hidden' }}
          onClick={() => handleSelectPage(page - 1)}
        >
          {'<'}
        </li>
        {listPages.map((p: any, i: number) => (
          <li
            key={i}
            onClick={() => handleSelectPage(p)}
            className={Number(p) === page ? 'active' : ''}
          >
            {p}
          </li>
        ))}
        <li
          style={{ visibility: page < pages ? 'visible' : 'hidden' }}
          onClick={() => handleSelectPage(page + 1)}
        >
          {'>'}
        </li>
      </ul>
    </div>
  );
};
