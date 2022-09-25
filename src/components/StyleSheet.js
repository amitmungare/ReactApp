import './myStyles.css'

export const StyleSheet = () =>{

    const heading = {
        fontSize : '72px',
        color: "blue"
    }

    return(
        <div>
            <h1 className='primary'>StyleSheet</h1>
            <h1 className='primary' style={heading}>StyleSheet</h1>
        </div>
    )
}