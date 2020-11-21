import React from 'react'

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlfor='e-mail'>E-mail</label>
                    <input
                        type='e-mail'
                        name='e-mail'
                        id='e-mail'
                        placeholder='e-mail'
                    />
                </div>
                <div>
                    <label htmlfor='passward'>passward</label>
                    <input
                        type='passward'
                        name='passward'
                        id='passward'
                        placeholder='passward'
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}
export default Login