import www from "./rotwww";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic dHJ1bmdjdUBnbWFpbC5jb206MTIzNA=='
};

export const fetchProducts = ({ sex, category, search = '' }) => {
    // let url = `${www}/products${sex}${search}`;
    let url = www + '/products/' + sex;
    if (category) {
        url += '/' + category;
    }
    url += search;

    console.log(url)
    return fetch(url, {
        method: 'GET',
        headers
    }).then(data => data.json());
};

