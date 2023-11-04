import React, { useState } from 'react'
import DefaultLayout from "@/layouts/default";
import styles from "@/styles/Home.module.css"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';

const Create = () => {
    const [category, setCategory] = useState("Domicle")
    return (
        <DefaultLayout>
            <div className={styles.container}>
                <div className={styles.header}>Create Certificate</div>
                <div className={styles.row}>
                    <Input type="text" label="Name" placeholder="Enter your Name" />
                </div>
                <div className={styles.row}>
                    <Input type="email" label="Email" placeholder="Enter your email" />
                </div>
                <div className={styles.row}>
                    <div>
                        <div style={{marginBottom: "10px", fontSize: "18px"}}>Type:</div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                >
                                    {category}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Dynamic Actions"
                                selectionMode="single"
                                selectedKeys={[category]}
                                onSelectionChange={setCategory}>
                                <DropdownItem key={"Domicle"}>Domicle</DropdownItem>
                                <DropdownItem key={"Caste"}>Caste</DropdownItem>
                                <DropdownItem key={"Non-Creamy"}>Non-Creamy</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Button color="primary">
                    Create
                </Button>
            </div>
        </DefaultLayout>
    )
}

export default Create