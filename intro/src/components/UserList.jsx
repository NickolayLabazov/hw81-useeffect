import React, { useState } from 'react';

import List from './List.jsx';
import Details from './Details.jsx';


import useFetch from './useFetch.js'

export default function UserList() {

    const [users, setUsers] = useState([]);

    const [info, setInfo] = useState({
        id: '',
        name: '',
    })

    const [isLoading, setLoading] = useState(false)

    const setUs = (list) => {
        setUsers(list)
    }

    const setInf = (id) => {
        setInfo(users[Number(id) - 1]);
    }

    useFetch('users', setUs, setLoading, '');

    return (
        <>
            {isLoading ? <p>Загрузка...</p> :
                <div className='userList-box'>
                    <div className='card-card'>
                        {users.map(user =>
                            <List
                                name={user.name}
                                id={user.id}
                                key={user.id}
                                setInf={setInf}
                            />)}
                    </div>
                    {info.id === '' ? null : <Details {...info} />}
                </div>
            }
        </>
    );
}