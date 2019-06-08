import Router from 'next/router'

import { loginUser } from '../lib/auth'

class LoginForm extends React.Component {
    state = {
        email: 'Sincere@april.biz',
        password: 'hildegard.org',
        error: '',
        isLoading: false
    }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }
    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }
    handleSubmit = (e) => {
        const { email, password } = this.state
        this.setState(() => ({ error: '', isLoading: true }))
        e.preventDefault()
        loginUser(email, password).then(() => Router.push('/profile'))
            .catch(this.showError)
    }
    showError = (err) => {
        const error = err.response && err.response.data || err.message 
        this.setState(() => ({ error, isLoading: false }))
        console.error(error)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                </div>
                <button disabled={this.state.isLoading} type="submit">{this.state.isLoading ? 'Sending' : 'Submit'}</button>
                {this.state.error && <div>{this.state.error}</div>}
            </form>
        )
    }
}

export { LoginForm as default }