import React from 'react'
import {useList} from  '@pankod/refine-core'
import { Typography,Box,Stack } from '@pankod/refine-mui'
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from '../components'


const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75,25]}
          colors={['#275be8','#c4e8ef']}
          />
           <PieChart
          title="Properties for rent"
          value={550}
          series={[60,40]}
          colors={['#275be8','#c4e8ef']}
          />
           <PieChart
          title="total customers"
          value={5684}
          series={[75,25]}
          colors={['#275be8','#c4e8ef']}
          />
           <PieChart
          title="Properties for Cities"
          value={555}
          series={[75,25]}
          colors={['#275be8','#c4e8ef']}
          />

      </Box>
      <Stack mt="25px" width="100%" direction={{xs:'column', lg:'row' }}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>

    </Box>
  )
}

export default Home