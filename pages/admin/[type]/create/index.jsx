import React from 'react'
import DefaultLayout from "@/layouts/default";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import styles from "@/styles/Create.module.css"
import { useRouter } from 'next/router';

const CreateDesign = () => {
  const router = useRouter()
  const type = router.query.type

  return (
    <DefaultLayout>
      <Card style={{ marginBottom: "20px" }}>
        <CardBody>
          <div className={styles.header}>
            <h1>{type.toUpperCase()} / Create Certificate</h1>
            <div className={styles.updateRow}>
              <Button color='primary' size='md'>Save</Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className='flex w-full gap-x-5'>
            <div className='flex-1'>
              <Input
                isRequired
                type="name"
                label="Name"
                defaultValue="Junior"
                className="max-w-xl mb-4"
              />
              <Input
                isRequired
                type="email"
                label="Email"
                defaultValue="junior@nextui.org"
                className="max-w-xl mb-4"
              />
              <Input
                isRequired
                type="mobile"
                label="Mobile No."
                defaultValue="+91 0000000000"
                className="max-w-xl mb-4"
              />
              <Input
                isRequired
                type="aadhar"
                label="Aadhar Number"
                defaultValue="0000 0000 0000"
                className="max-w-xl"
              />
            </div>
            <div className='flex-1'>
              <input type='file' className='bg-default-100 rounded-medium outline-none h-14 px-3 py-3 is-filled'/>
            </div>
          </div>

        </CardBody>
      </Card>
    </DefaultLayout>
  )
}

export default CreateDesign