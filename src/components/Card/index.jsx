import './styles.css';

export function Card(props){
    return (
        <div className='card' onClick={() => {props.handleRemoveStudent(props.time)}}>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}