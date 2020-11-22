import React from 'react'

const signUp = () => {
  return (
    <>
      <h1>サインアップ</h1>
      <div>
        <input
          type="email"
          name="email"
          placeholder="your e-mail"
          id="email"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="diecide a password"
          name="password"
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="your name"
        />
      </div>
      <button type="submit">登録</button>
      <p><a href="login.js">ログイン</a></p>
    </>
  )
}
export default signUp