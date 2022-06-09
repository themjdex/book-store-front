import {$authHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const createAuthor = async (author) => {
    const {data} = await $authHost.post('api/author', author);
    return data;
}

export const fetchAuthors = async () => {
    const {data} = await $host.get('api/author');
    return data;
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book', book);
    return data;
}

export const fetchBooks = async () => {
    const {data} = await $host.get('api/book');
    return data;
}

export const fetchOneBook = async (id) => {
    const {data} = await $host.get('api/book/' + id);
    return data;
}