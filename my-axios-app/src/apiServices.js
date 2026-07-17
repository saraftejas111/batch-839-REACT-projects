// employees

import axios from "axios";

const BASE_URL = `http://localhost:8080/employees/`;

export const showAllEmployees = () => axios.get(`${BASE_URL}`);

export const addEmployees = (emp) => axios.post(`${BASE_URL}`, emp);

export const deleteById = (id) => axios.delete(`${BASE_URL}${id}`);

export const updateEmployee = (id, emp) => axios.put(`${BASE_URL}${id}`, emp);
