import { useEffect } from 'react';

export default async function useFetcch(id, setUs, setLoading, dep) {
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const list = await response.json();
                setUs(list)
            } catch (e) {
                console.error(e)
            } finally{
                setLoading(false);
            }
        }
        fetchUsers()
    }, [dep]);




    /*  useEffect(() => {
        try {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                .then((response) =>
                    response.json()
                ).then(list => setUs(list))

        } catch (e) {
            console.error(e);
        }
    }, [dep]); */
}