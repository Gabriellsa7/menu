import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + "/food")
  return response
}

export function useFoodData() {
  const query = useQuery({
    //function that will used to do the fetchData
    queryFn: fetchData,
    //identify the function uniquely
    queryKey: ['food-data'],
    retry: 2,
  })

  return {
    //everything that is inside the query that's why the three-dot notation is used
    ...query,
    //This code is likely part of an object destructuring assignment or a property setting, where data is being assigned a value.
    data: query.data?.data,
  }
}
