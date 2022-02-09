import React, {useState} from "react";

function useAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, hook: any) {
        hook(e.target.value)
    }
    return {
        email,
        setEmail,
        password,
        setPassword,
        handleChange
    }
}

export default useAuth;