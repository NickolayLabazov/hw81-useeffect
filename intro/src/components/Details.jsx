import React, { useState } from 'react';
import useFetch from './useFetch.js';

export default function UserList(props) {

    const [user, setUser] = useState({
        avatar: '',
        name: '',
        details: {
            poition: '',
            city: '',
            company: '',
        }
    });

    const [isLoading, setLoading] = useState(false)

    const setUs = (list) => {
        setUser(list)
    }

    useFetch(props.id, setUs, setLoading, props);

    return (
        <div className='details'>
            {isLoading ? 'Загрузка...' :
                <>
                    <img src={user.avatar} alt={user.id} />
                    <p className='detail'> {user.name}</p>
                    <p className='detail'>City: {user.details.city}</p>
                    <p className='detail'> Company: {user.details.company}</p>
                    <p className='detail'>Position: {user.details.position}</p>
                </>
            }
        </div>

    );
}