import { searchBox as searchBoxWidget } from 'instantsearch.js/es/widgets';

export const searchBox = searchBoxWidget({
  container: '[data-widget="searchbox"]',
  //placeholder: 'Articles, categories or authors',
  placeholder: 'Titles or captions',
  showSubmit: false,
});
