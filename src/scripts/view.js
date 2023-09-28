import * as data from '../public/data/DATA.json';

const view = () => {

    fetch(data).then(response => {
        if(response.data.restaurants){
            return response.json();
        }
        else{
            throw new Error('data tidak ditemukan');
        }
    })
    .catch(error => {
        console.log('problema', error)
    })

    const card = document.querySelector('card');



}

export default view;