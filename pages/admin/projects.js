import React from 'react'
import NgoAdminLayout from '../../src/components/layouts/NgoAdminLayout'
import NgoAdminProjects from '../../src/components/ui/support/NgoAdminProjects'

function Projects() {
  return (
    <NgoAdminLayout>
        <div>projects</div>
        <NgoAdminProjects/>
    </NgoAdminLayout>
  )
}

export default Projects