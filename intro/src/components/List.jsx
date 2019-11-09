import React from 'react';

export default function UserList(props) {
//console.log(props)
    return (
        <div
            className='list-item'
            onClick={() => props.setInf(props.id)}
        >
            {props.name}
        </div>
    );
}