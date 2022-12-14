function Campeones () {
    return (
        <h1> Campeones </h1>,
        <ul>
            <li> Aatrox </li>
            <li> Garen </li>
            <li> Trundle </li>
        </ul>
    )
}

export default Campeones;

const promiseCampeones = new Promise((resolve, rejected) => {
    const champs = [
        {
            id: 1,
            name: 'Aatrox',
            description: 'La espada darkin',
        },
        {
            id: 2,
            name: 'Garen',
            description: 'El poder de Demacia',
        },
        {
            id: 3,
            name: 'Trundle',
            description: 'El rey de los troles',
        },
    ];
    setTimeout(() => {
        resolve(champs);
    }, 1000);
    });

    promiseCampeones.then((respuesta) => {
        console.log(respuesta);
    });