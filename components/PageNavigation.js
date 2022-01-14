import Router from 'next/router';
import { useState } from 'react';

const PageNavigation = ({ page, totalPages }) => {
  const [pageInput, setPageInput] = useState('');

  const pageInputHandler = (event) => {
    const { value } = event.target;
    console.log(
      value,
      isNaN(value),
      parseInt(value) > totalPages,
      parseInt(value) < 0
    );
    if (isNaN(value)) return;
    else if (parseInt(value) > totalPages) setPageInput(500);
    else if (parseInt(value) < 1) setPageInput(1);
    else setPageInput(value);
  };

  const pageInputSubmit = (event) => {
    event.preventDefault();
    let { query } = Router;
    query.page = parseInt(pageInput) || 1;
    query = Object.entries(query).map(([query, value]) => `${query}=${value}`);
    query = query.join('&');
    Router.push(`/cinema${query ? `?${query}` : ''}`);
  };

  const nextButtonDisabled = page >= totalPages;
  const prevButtonDisabled = page <= 1;

  const nextButtonHandler = () => {
    let { query } = Router;
    query.page = parseInt(query.page || 1) + 1;
    query = Object.entries(query).map(([query, value]) => `${query}=${value}`);
    query = query.join('&');
    Router.push(`/cinema${query ? `?${query}` : ''}`);
  };

  const prevButtonHandler = () => {
    let { query } = Router;
    query.page = parseInt(query.page || 1) - 1;
    query = Object.entries(query).map(([query, value]) => `${query}=${value}`);
    query = query.join('&');
    Router.push(`/cinema${query ? `?${query}` : ''}`);
  };

  return (
    <div className="flex flex-col items-center py-6">
      <form className="flex mt-4 space-x-4" onSubmit={pageInputSubmit}>
        <PageNavigationButton
          type="button"
          text="Previous"
          onClick={prevButtonHandler}
          disabled={prevButtonDisabled}
        />
        <input
          type="text"
          className="px-4 w-44 text-center bg-slate-700 rounded-full focus:placeholder-transparent"
          placeholder="Page"
          onChange={pageInputHandler}
          value={pageInput}
        />
        <PageNavigationButton
          type="button"
          text="Next"
          onClick={nextButtonHandler}
          disabled={nextButtonDisabled}
        />
      </form>
      <div className="flex my-2 space-x-8"></div>
      <p>
        Page {page} of {totalPages} pages
      </p>
    </div>
  );
};

const PageNavigationButton = ({ text, disabled, ...props }) => {
  return (
    <button
      className={`rounded-full px-4 min-w-[100px] min-h-[44px] transition-all ${disabled ? 'bg-slate-600 text-slate-900': 'bg-slate-900 shadow-md shadow-slate-900 hover:scale-105 hover:bg-slate-700 active:scale-100'}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default PageNavigation;
