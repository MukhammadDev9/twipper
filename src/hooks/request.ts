import { useState, useEffect } from "react";
import { Axios } from "../utils/axiosConfig";

export interface ApiResponseI {
    loading?: boolean
    response?: any
    request: (AxiosOptions?: any) => void
}

export const useGetRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const usePostRequest = <T>(options = {}) =>
    useRequest({ method: 'POST', ...options })

export const usePutRequest = <T>(options = {}) =>
    useRequest({ method: 'PUT', ...options })

export const usePatchRequest = <T>(options = {}) =>
    useRequest({ method: 'PATCH', ...options })

export const useDeleteRequest = <T>(options = {}) =>
    useRequest({ method: 'DELETE', ...options })

export const useRequest = <T>(options: {}): ApiResponseI => {
    const [loading, setLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<any>()

    async function request(overrideOptions = {}) {
        setLoading(true)
        try {
            const { data } = await Axios({ ...options, ...overrideOptions })
            if (data !== null) return setResponse(data)
        } catch (error) {
            throw (error);
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        response,
        request
    }
}

export const useLoad = <T>(options = {}, dependencies: any[] = []) => {
    const request = useGetRequest<T>({ ...options })
    useEffect(() => {
        request.request()
    }, dependencies)

    return request
}