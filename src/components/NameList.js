export const NameList  =()=>{
    const names = ['amit', 'neeta', 'namdev', 'trupti']

    return (
        <div>
            {
                names.map((name) => {
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )
}