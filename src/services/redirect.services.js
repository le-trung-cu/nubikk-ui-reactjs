import www from "./rotwww";

export const fetchFilterSorter = ({ sex, categoryName }) => {
    let url = www + '/redirect/filterSorter/' + sex;
    if (categoryName) {
        url += '/' + categoryName;
    }
    console.log('..............', url)
    return fetch(url).then(res => res.json());
}

export const fetchCategories = ({ sex }) => {
    let url = www + '/redirect/categories/' + sex;

    return fetch(url).then(res => res.json())
}