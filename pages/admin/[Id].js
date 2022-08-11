import React from 'react'
import NgoAdminLayout from '../../src/components/layouts/NgoAdminLayout';
import NgoDetails from '../../src/components/ui/support/NgoDetails';
import { useRouter } from 'next/router';

function Id() {

  const router = useRouter()
  const { id } = router.query

  return (
    <NgoAdminLayout>
        <NgoDetails id={id}/>
    </NgoAdminLayout>
  )
}

export default Id;