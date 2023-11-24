import React from 'react'
import DefaultLayout from "@/layouts/default";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import styles from "@/styles/Create.module.css"

const CreateDesign = () => {
    return (
        <DefaultLayout>
            <Card style={{ marginBottom: "20px" }}>
                <CardBody>
                    <div className={styles.header}>
                        <h1>My Design #1</h1>
                        <div className={styles.updateRow}>
                            <Input value={"My Design #1"} placeholder='Enter the design name' />
                            <Button color='primary' size='md'>Save</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className={styles.builderContainer}>
                        <div>
                            
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </DefaultLayout>
    )
}

export default CreateDesign