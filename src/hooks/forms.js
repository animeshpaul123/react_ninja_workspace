import { useState } from 'react'

export default function useCustomForm({ inputFields = 1, multiInput = false }) {
    const [form, setForm] = useState({})
    const getErrors = () => {
    }
    // useEffect(() => {
    //     console.log(form)
    // }, [form])
    const register = name => {
        return {
            value: form[name] || '',
            name: name || '',
            onChange: (e) => {
                if (multiInput && e.target.value.length > 1) return
                setForm({ ...form, [name]: e.target.value })
            }
        }
    }
    const handleSubmit = (onSubmit) => {
        return (e) => {
            e.preventDefault()
            onSubmit(form)
        }
    }
    return [register, handleSubmit, form, getErrors()]
}
