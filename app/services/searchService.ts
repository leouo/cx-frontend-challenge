import axios from 'axios'
import { ISearchContext, defaultContextValue } from '../context/searchContext'

interface ISearchAPIResponse {
  query: string;
  results: [],
  available_sorts: [];
  sort: {
    id: string;
    name: string;
  };
  available_filters: [];
  filters: [];
}

interface ISearchParams {
  q: string;
  sort: string;
  filter?: {};
}

interface ISearchService {
  search(searchParams: ISearchParams): Promise<ISearchContext>
}

export default class APISearchService implements ISearchService {
  private apiURL: string;

  constructor(apiURL: string) {
    this.apiURL = apiURL;
  }

  async search(searchParams: ISearchParams): Promise<ISearchContext> {
    try {
      const { data, ...res } = await axios.get(this.apiURL, { params: searchParams })

      const {
        query: previousQuery,
        results,
        available_sorts,
        available_filters,
        sort
      }: ISearchAPIResponse = data

      return {
        previousQuery,
        results: results,
        availableSorts: [...available_sorts, sort],
        defaultSort: sort,
        availableFilters: available_filters,
      }
    } catch (error) {
      console.error(`Log error on Observability: ${error}`)
      return defaultContextValue
    }
  }
}
