import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

export default function Contacts() {
  return (
    <Box className="containr text-center" m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header
        title="معلومات التواصل "
        subtitle="مرحبا بك فى مغلومات التواصل "
      ></Header>
    </Box>
  </Box>
  )
}
