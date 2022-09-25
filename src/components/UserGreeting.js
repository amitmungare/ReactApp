export const UserGreeting = () =>{
    const isLoggedIn = true
    return (
        // <div>Welcome {isLoggedIn? "Amit":"Guest"}</div>
        <div>Welcome {isLoggedIn && "Amit"}</div>
    )
}