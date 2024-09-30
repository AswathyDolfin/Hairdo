import { useEffect, useState } from "react"
function Fetch() {
    const [apiDetails, setApiDetails] = useState([])
    useEffect(() => {
        getAPI();
    }, [])
    const getAPI = () => {
        fetch('http://blackfarm.in/react/view_filims.php')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setApiDetails(data)
            })
            .catch((error) => {
                console.error('Fetch error:', error)
            });
    }
    console.log(apiDetails);
    return (
        <ul>
            {apiDetails.map((api) => (
                <div className="content" key={api.name}>
                    <li>
                        <div className="box">
                            <img src={api.image} alt='img' />
                        </div>
                        <h2>{api.name}</h2>
                        <p>{api.description}</p>
                    </li>
                </div>
            ))}
        </ul>

    )
}
export default Fetch