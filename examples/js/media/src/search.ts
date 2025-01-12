import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { singleIndex } from 'instantsearch.js/es/lib/stateMappings';

import {
  articles,
  createAuthors,
  createClearFilters,
  createDates,
  configuration,
  searchBox,
  createSelectedTopics,
  stats,
  topics,
  seeResults,
} from './widgets';

const searchClient = algoliasearch(
  //'1QDAWL72TQ',
  //'47700f55d95d23f5a57744b9a027ea83'
  'NRWBOX9G85',
  '128612de13314a6321a606b55479cca8'
);

const search = instantsearch({
  searchClient,
  //indexName: 'PROD_algolia_blog',
  indexName: 'foods',
  routing: {
    //stateMapping: singleIndex('PROD_algolia_blog'),
    stateMapping: singleIndex('foods'),
  },
});

const datesDesktop = createDates({
  container: '[data-widget="dates-desktop"]',
  header: 'Date',
});
const datesMobile = createDates({
  container: '[data-widget="dates-mobile"]',
  header: 'Date',
});
const selectedTopicsDesktop = createSelectedTopics({
  container: '[data-widget="selected-topics-desktop"]',
});
const selectedTopicsMobile = createSelectedTopics({
  container: '[data-widget="selected-topics-mobile"]',
});
const clearFiltersDesktop = createClearFilters({
  container: '[data-widget="clear-filters-desktop"]',
});
const clearFiltersMobile = createClearFilters({
  container: '[data-widget="clear-filters-mobile"]',
});
const authorsDesktop = createAuthors({
  container: '[data-widget="categories-desktop"]',
});
const authorsMobile = createAuthors({
  container: '[data-widget="categories-mobile"]',
});

search.addWidgets([
  articles,
  authorsDesktop,
  authorsMobile,
  clearFiltersMobile,
  clearFiltersDesktop,
  configuration,
  datesDesktop,
  datesMobile,
  searchBox,
  selectedTopicsMobile,
  selectedTopicsDesktop,
  stats,
  topics,
  seeResults,
]);

export default search;
