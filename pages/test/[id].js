import React from 'react'
import {useRouter} from 'next/router';

function id() {
    const router = useRouter();
    return (
        <div>
            Saya {router.query.id}
        </div>
    )
}

export default id
