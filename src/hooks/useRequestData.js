import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente.')
            })
    }, [url])

    return (data)
}

// export const useTripsList = () => {
//     const [trips, setTrips] = useState([])

//     useEffect(() => {
//         axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trips')
//             .then((response) => {
//                 setTrips(response.data.trips)
//             })
//     }, [])

//     return trips
// }