import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBkXX-IGwZuQnTPhO-Crz253DIYuoSgbyE`;
    useEffect(async () => {

    }, []);
};

export default useGoogleAddress;