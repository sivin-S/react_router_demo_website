import { useParams } from "react-router-dom"
function User() {

  const {userId} = useParams()

  return (
    <div>followers: {userId}</div>
  )
}

export default User