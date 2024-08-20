import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const deleteFoodData = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/food/${id}`);
  };

export function useFoodDataDelete() {
  const queryClient = useQueryClient();
  const deleteFood = useMutation({
    mutationFn: deleteFoodData,
    retry: 2,
    onSuccess: () => {
        // Invalidate queries with a key, assuming 'food-data' is the correct key
        queryClient.invalidateQueries(['food-data']);
    }
  })
  return deleteFood;
}