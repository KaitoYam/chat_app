import React from 'react'

const login = () => {
  return (
    <>
      <form>
        <h1>ログイン</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="e-mail"
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
          />
        </div>
        <div>
          <input
            type="submit"
            name="login"
            value="ログイン"
          />
        </div>
        <p><a href="signUp">新規登録</a></p>
      </form>
    </>
  )
}

export default login