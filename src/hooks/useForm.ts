import { ChangeEvent, useState } from "react";



const useForm =  <T>(initialForm:T) => {
    const [formState, setFormState] = useState<T>(initialForm)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onResetForm = () => {
        setFormState( initialForm );
    }
    return {
       
        formState,
        handleInputChange,
        onResetForm,
        ...formState,
    }
}

export default useForm;