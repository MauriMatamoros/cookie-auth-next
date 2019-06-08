import Link from 'next/link'

const Layout = ({ title, children, auth }) => {
    const { user = {} } = auth || {}
    console.log(auth)
    return (
        <div className="root">
            <nav className="navbar">
                <span>Welcome, <strong>{user.name || 'Guest'}</strong></span>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    {user.email ? (
                            <>
                                <Link href="/profile">
                                    <a>Profile</a>
                                </Link>
                                <button>Logout</button>
                            </>
                        ) : (
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                    )}
                </div>
            </nav>
            <h1>{title}</h1>
            {children}
            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                .navbar {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                }
                a {
                    margin-right: 0.5em
                }
                button {
                    text-decoration: underline;
                    padding: 0;
                    font: inherit;
                    cursor: pointer;
                    border-style: none;
                    color: rgb(0, 0, 238);
                }
            `}</style>
        </div>
)}

export { Layout as default }