import fetch from 'isomorphic-unfetch';

const BASE_URL = "http://localhost:4000";

export const getFaturas = () => fetch(`${BASE_URL}/faturas`);
