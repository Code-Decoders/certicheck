import DefaultLayout from "@/layouts/default";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import SupabaseDatabase from "@/services/supabaseDatabase";



ChartJS.register(ArcElement, Tooltip, Legend);
export default function IndexPage() {
  const router = useRouter()
  const [certificates, setCertificates] = useState([])

  const supabase = createClientComponentClient();

  const [data, setData] = useState()

  const getData = async () => {
    SupabaseDatabase.init(supabase);

    const certificates = await SupabaseDatabase.getAllCertificates()
    const status = ["approved", "reject"]
    console.log(status.map(e => certificates.filter(a => a.status == e).length))
    setData({
      labels: ['Approved', 'Reject'],
      datasets: [
        {
          label: '# of Certificates',
          data: status.map(e => certificates.filter(a => a.status == e).length),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
    )
    setCertificates(certificates)
  }

  useEffect(() => {
    getData()
  }, [])
  if (data)
    return <DefaultLayout>
      <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-[16px] gap-y-[16px] mb-5">
        <Card className="cursor-pointer">
          <CardBody onClick={() => { router.push("/admin/Domicle/create") }}>
            <img src="/icons/certificate.png" className="dashboard-icon" />
            <p className="text-lg">Domicle Certificate</p>
          </CardBody>
        </Card>
        <Card className="cursor-pointer">
          <CardBody onClick={() => { router.push("/admin/Caste/create") }}>
            <img src="/icons/certificate.png" className="dashboard-icon" />
            <p className="text-lg">Caste Certificate</p>
          </CardBody>
        </Card>
        <Card className="cursor-pointer">
          <CardBody onClick={() => { router.push("/admin/Non-Creamy/create") }}>
            <img src="/icons/certificate.png" className="dashboard-icon" />
            <p className="text-lg">Non-creamy Certificate</p>
          </CardBody>
        </Card>
      </div>
      <Divider />
      <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-[16px] gap-y-[16px] c">
        <Doughnut data={data}
          height="300px"
          width="300px"
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </DefaultLayout>
}
