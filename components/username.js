import React from 'react';
import inBrowser from '../lib/checkInBrowser';
import dynamic from 'next/dynamic'

function UserName() {
    return (
        <span>{inBrowser && localStorage.getItem("name")}</span>
    )
}

export default dynamic(() => Promise.resolve(UserName), {ssr: false})
