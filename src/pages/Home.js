import { Link, useNavigate } from "react-router-dom"
// useNavigate provides a programmatic way to navigate between different routes within your application.
function HomePage(){
    const navigate = useNavigate()

    function navigateHandler(){
        navigate('/products')
    }
    return(
        <>
        <h1>My Home page</h1>
        {/* <p>Go to <a href="/products"> the list of products</a></p> */}
        {/* navigating between the home and product page with the help of links, the anchor tag refresh the brower and send a new request */}
        <p>Go to <Link to="/products"> the list of products</Link></p>
        <p>
            <button onClick={navigateHandler}>navigate</button>
        </p>
        </>
    )
}

export default HomePage