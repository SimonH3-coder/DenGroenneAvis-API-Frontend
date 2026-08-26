import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';

export function Productdetailspage() {
    const { id } = useParams();
    const { data: product, isLoading, error } = useFetch(`http://localhost:4000/api/products/${id}`);

    const [datacomments, setdataComments] = useState([]);
    const {datatext, setdataText} = useState('');

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || null);
    const isLoggedIn = Boolean(token && user);
)
}


    