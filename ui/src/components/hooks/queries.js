import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function useGetIdeasQuery(page) {
  return useQuery(['ideas'], () =>
    axios
      .get(`http://localhost:3000/api/idea?page=${page}`)
      .then((res) => res.data),
  );
}

export { useGetIdeasQuery };
