import { useState, useEffect } from "react";
import { Axios } from "../utils/axiosConfig";

export interface ApiResponseI {
    loading?: boolean
    response?: any
    request: () => void
}

export const useGetRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const usePostRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const usePutRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const usePatchRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const useDeleteRequest = <T>(options = {}) =>
    useRequest({ method: 'GET', ...options })

export const useRequest = <T>(options: {}): ApiResponseI => {
    const [loading, setLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<any>()

    const request = async (overrideOptions = {}) => {
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

export const useLoad = <T>(options = {}, dependencies = []) => {
    const request = useGetRequest<T>({ ...options })
    useEffect(() => {
        request.request()
    }, dependencies)

    return request
}