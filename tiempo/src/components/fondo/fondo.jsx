import './style.css'

export default function ImagenFondo(props) {
    
    return(
        <img src={props?.datos} alt="fondo" className='fondo' />
    )
}