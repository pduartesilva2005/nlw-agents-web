import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from './types/get-rooms-response'
import { apiConfig } from './api-config'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${apiConfig.baseURL}/rooms`)
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
}
