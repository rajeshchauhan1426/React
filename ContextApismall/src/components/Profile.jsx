import React, {useContext} from 'react'
import UserContext from './context/UserContext'
import ViteImportAnalysis from 'vite-plugin-import-analysis';


function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile