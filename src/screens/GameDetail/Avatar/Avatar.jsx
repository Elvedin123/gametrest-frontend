import { verifyUser } from '../../../services/apiConfig.js';
import { useEffect, useState } from 'react'
import avatarcss from './Avatar.module.css'

export default function Avatar() {


  const [avatar, setAvatar] = useState()
  // const userId = localStorage.getItem('id')
  const id = localStorage.getItem('id')

  useEffect(() => {
    const fetchAvatar = async () => {
      const getAvatar = await verifyUser()
      console.log(getAvatar.data?.user)
      setAvatar(getAvatar.data?.user)
    }
    fetchAvatar()
  }, [id])

  // console.log(avatar)
  if (!avatar) {
    return (
      <div>No Avatar</div>
    )
  }
  return (
    <div className={avatarcss.content}>
      <h3>Welcome, {avatar.userName}</h3>
      <img className={avatarcss.image} src={avatar.avatar} alt={avatar.userName} />

    </div>
  );
}