import { useGetIdentity,useOne } from "@pankod/refine-core" 
import {Profile} from 'components'



const MyProfile = () => {
  const {data:user} =useGetIdentity();
  const {data,isLoading,isError} = useOne({
    resource:'users',
    id:user?.userid,
  })
  const MyProfile=data?.data??[];
  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error</div>
  
  return (
    <Profile
     type='my'
     name={MyProfile.name}
     email={MyProfile.email}
     avatar={MyProfile.avatar}
     properties={MyProfile.allProperties}
    />
  )
}

export default MyProfile