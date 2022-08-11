import React from 'react'
import NgoAdminLayout from '../../src/components/layouts/NgoAdminLayout'
import AddProject from '../../src/components/ui/support/AddProject'

function addproject() {
  return (
    <NgoAdminLayout>
        <div>addProject</div>
        <AddProject/>
    </NgoAdminLayout>
  )
}

export default addproject