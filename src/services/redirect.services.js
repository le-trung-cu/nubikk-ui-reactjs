const www = 'http://localhost:5001/api/redirect';

export const fetchFilterSorter = ({ sex, categoryName }) => {
    let url = www + '/filterSorter/' + sex;
    if (categoryName) {
        url += '/' + categoryName;
    }
    console.log('..............', url)
    return fetch(url).then(res => res.json());
}

export const fetchCategories = ({ sex }) => {
    let url = www + '/categories/' + sex;

    return fetch(url).then(res => res.json())
}