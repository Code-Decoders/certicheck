import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";



export default function IndexPage() {
  const router = useRouter()
  return <DefaultLayout>
    <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-[16px] gap-y-[16px]">
      <Card className="cursor-pointer">
        <CardBody onClick={() => {router.push("/admin/domicle/create")}}>
          <img src="/icons/certificate.png" className="dashboard-icon"/>
          <p className="text-lg">Domicle Certificate</p>
        </CardBody>
      </Card>
      <Card className="cursor-pointer">
        <CardBody onClick={() => {router.push("/admin/caste/create")}}>
          <img src="/icons/certificate.png" className="dashboard-icon"/>
          <p className="text-lg">Caste Certificate</p>
        </CardBody>
      </Card>
      <Card className="cursor-pointer">
        <CardBody onClick={() => {router.push("/admin/non-creamy/create")}}>
          <img src="/icons/certificate.png" className="dashboard-icon"/>
          <p className="text-lg">Non-creamy Certificate</p>
        </CardBody>
      </Card>
    </div>
  </DefaultLayout>
}
