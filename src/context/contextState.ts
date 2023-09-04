import { useState } from 'react'

export const useForm = (initialForm: any, validateForm: any) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState('')

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e: any) => {
        handleChange(e)
        setErrors(validateForm(form))
    }
    const handleSubmit = () => {
        setErrors(validateForm(form))
        if (errors === '') {
            return 'espere'
        } else if (Object.keys(errors).length === 0) {
            return 'ok'
        }
    }

    return { form, errors, setForm, setErrors, handleChange, handleSubmit, handleBlur }
}