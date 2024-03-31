import { createContext } from "react";

export const apiBaseUrl = createContext('https://bootcamp-api.codeit.kr');

export const getSampleUser = createContext({url: '/api/sample/user', method: 'GET'});

export const getSampleData = createContext({url: '/api/sample/folder', method: 'GET'});