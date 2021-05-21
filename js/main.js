import { 
  setSearchFocus,
  showClearTextButton,
  clearSearchText,
  clearPushListener
} from './searchBar.js';

import { 
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
  deleteSearchResults
} from './searchResults.js';

import { 
  getSearchTerm,
  retrieveSearchResults
} from './dataFunctions.js';

document.addEventListener('readystatechange', (event) => {
  // console.log(event.target.readyState);
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // Set the focus on the text input
  setSearchFocus();

  // Clear 2 text
  const clear = document.getElementById('clear');
  clear.addEventListener('click', clearSearchText);
  clear.addEventListener('keydown', clearPushListener);

  // 3 listener clear text
  const search = document.getElementById('search');
  search.addEventListener('input', showClearTextButton);

  const form = document.getElementById('search-bar');
  form.addEventListener('submit', submitSearch);
}

// Procedural "workflow" func
const submitSearch = (event) => {
  // Stop default behavior
  event.preventDefault();
  // Delete search result
  deleteSearchResults();
  // process the search
  processTheSearch();
  // Set the focus
  setSearchFocus();
}

// Procedural
const processTheSearch = async () =>  {
  // Clear the stats line
  clearStatsLine();

  const searchTerm = getSearchTerm();
  if(searchTerm === '') return;

  const resultArray = await retrieveSearchResults(searchTerm);
  // Build search result
  if(resultArray.length) buildSearchResults(resultArray);
  //
  setStatsLine(resultArray.length);
}