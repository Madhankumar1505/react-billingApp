import React, { useCallback, useState } from "react";
import axios from "axios";

export const useLoading = (() => {
    const [loading, setLoading] = useState(false);
    return [loading, setLoading];
});

export const useData = ((defaultValue) => {
    const [data, setData] = useState(defaultValue);
    return [data, setData];
});

export const getAPIPath = () => {
    return "http://localhost:8080/";
}

const axios_ = axios.create({
    baseURL: getAPIPath,
    responseType: "json",
    ContentType: "application/json"
});

const TIMEOUT = 60 * 1000;

const setRequestOptions = (opts) => {
    let reqOpts = {};
    reqOpts.timeout = opts.timeout || TIMEOUT;
    reqOpts.headers = {
        "Content-Type": "application/json",
        ...opts.headers
    }
    return reqOpts;
};


export const getService = (reqObj) => {
    let url = reqObj.url;
    if (reqObj.prefix) {
        url = reqObj.prefix + url;
    }

    if (reqObj.method === "POST") {
        return axios_.post(url, reqObj.data, setRequestOptions(reqObj));
    } else if (reqObj.method === "PUT") {
        return axios_.put(url, reqObj.data, setRequestOptions(reqObj));
    } else if (reqObj.method === "PATCH") {
        return axios_.patch(url, reqObj.data, setRequestOptions(reqObj));
    } else {
        return axios_.get(url, setRequestOptions(reqObj));
    }
}

export const useFetchData = ({ reqObj, setData }) => {
    const [error, setError] = useState(null);
    const [url] = useState(reqObj.url);
    const [loading, setLoading] = useLoading(false);
    const [resData, setResData] = useData(null);

    const callAPI = useCallback((reqObj) => {
        if (url) {
            setLoading(true);
            let service = getService(reqObj);
            service.then(res => {
                try {
                    if (reqObj.dataPrefix) {
                        if (Array.isArray(reqObj.dataPrefix)) {
                            setResData(res.data[reqObj.dataPrefix[0]][reqObj.dataPrefix[1]]);
                            setData(res.data[reqObj.dataPrefix[0]][reqObj.dataPrefix[1]]);
                        } else {
                            setResData(res.data[reqObj.dataPrefix]);
                            setData(res.data[reqObj.dataPrefix]);
                        }
                    } else {
                        setResData(res.data);
                        setData(res.data);
                    }
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }).catch((error) => {
                setError(error);
                setLoading(false);
            });
        }
    }, [url]);
    return [loading, error, resData]
}