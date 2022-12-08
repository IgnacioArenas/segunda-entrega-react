import {
    useParams
} from 'react-router-dom'
function Detail () {
    const { name } = useParams()
    return (
        <h1> Detalles de {name} </h1>
    )
}

export default Detail;