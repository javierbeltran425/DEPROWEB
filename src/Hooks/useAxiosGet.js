import axios from 'axios'

import { useEffect, useState } from 'react'

export function useAxiosGet(url) {
    const [ request, setRequest ] = useState({ status: 'loading', error: false, response: null })

    useEffect(() => {
        axios.get(url, {
            headers: { Authorize: localStorage.getItem('token') }
        })
            .then(res => {
                setRequest({ status: 'done', error: false, response: res.data })
            })
            .catch(err => {
                console.log(err)
                setRequest({ status: 'done', error: true, response: null })
            })
    }, [url])

    return request

}