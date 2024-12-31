import {useLoaderData} from 'react-router-dom'



function Github() {
    const data = useLoaderData()
    // ### manually fetch data when component mount 
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then(data=> setData(data))
    //     .catch(e=>console.log("e >",e))
    // },[])
   console.log(data);
   
  return (
    <div>{data.followers}</div>
  )
}

export default Github
// #### next js trick ####
// next js method(trick) fetch data when route visit route fetch data
//  <Route
// loader={githubInfoLoader} 
// path='github' element={<Github/>}/> 
// ######
export const githubInfoLoader= async()=>{
  const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}