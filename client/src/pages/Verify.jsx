import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const success = searchParams.get('success')
    const sessionId = searchParams.get('sessionId')

    const verifyStripe = async () => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/verifyStripe',
                { success, sessionId },
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
            navigate('/my-appointments')
        } catch (error) {
            toast.error(error.message)
            navigate('/my-appointments')
        }
    }

    useEffect(() => {
        if (token && sessionId && success) {
            verifyStripe()
        }
    }, [token, sessionId, success])

    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <div className="w-20 h-20 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        </div>
    )
}

export default Verify
