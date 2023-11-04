import React from 'react'
import axios from 'axios'

const certifierApi = () => {

    const BASE_URL = "https://api.certifier.io/v1/"
    const BEARER_AUTH = "Bearer cfp_tcS7wEgDeyJmdpvTREwZHLxLtfvBYDbjz2HA"

    const createCredential = async () => {
        return await request({
            url: "credentials", data: {
                recipient: { name: 'Johnn Doe', email: 'john.doe@example.com' },
                groupId: '01hectjvh1352s852g9pjv0nfb'
            }
        })
    }

   

    const request = async ({ url, data }) => {
        const options = {
            method: 'POST',
            url: BASE_URL + url,
            headers: {
                accept: 'application/json',
                'Certifier-Version': '2022-10-26',
                'content-type': 'application/json',
                authorization: BEARER_AUTH
            },
            data: data
        };
        try {
            const response = await axios
                .request(options)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    return {createCredential, }
}

export default certifierApi