const Data = {
  showSidePanel: false,
  searchValue: '',
  facetedValue: '',
  filterValue: '',
  title: 'SDMX Faceted Search',
  languages: [
    {
      id: 0,
      name: 'En',
    },
    {
      id: 1,
      name: 'Cz',
    },
    {
      id: 2,
      name: 'Fr',
    },
  ],
  dataflows: [{
    id: 'IRS',
    agency: 'ECB',
    version: '1.0',
    name: 'Interest rate statistics',
  }],
  facetedbox: [
    {
      id: 0,
      name: 'Reference area',
      facets: [
        {
          id: 0,
          name: 'All',
        },
        {
          id: 1,
          name: 'Austria (AT)',
        },
        {
          id: 2,
          name: 'Belgium (BE)',
        },
      ],
    },
    {
      id: 1,
      name: 'Frequency',
      facets: [
        {
          id: 0,
          name: 'All',
        },
        {
          id: 1,
          name: 'Daily',
        },
        {
          id: 2,
          name: 'Monthly',
        },
        {
          id: 3,
          name: 'Yearly',
        },
      ],
    },
  ],
  filterbox: [
    {
      id: 0,
      name: 'Type',
      filtres: [
        {
          id: 0,
          name: 'Vélo BMX',
        },
        {
          id: 1,
          name: 'Vélo de route',
        },
        {
          id: 2,
          name: 'Vélo électrique',
        },
        {
          id: 3,
          name: 'Vélo pliable',
        },
        {
          id: 4,
          name: 'Vélo tout terrain',
        },
        {
          id: 5,
          name: 'All',
        },
      ],
    },
  ],
};

export default Data;
