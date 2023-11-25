"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  CircularProgress,
} from "@nextui-org/react";
import NextLink from "next/link";

import SupabaseDatabase from "@/services/supabaseDatabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { VerifyIcon } from "@/components/icons";

const Certificate = () => {
  const router = useRouter();
  const id = router.query.id;
  const supabase = createClientComponentClient();
  const [certificate, setCerttificate] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    SupabaseDatabase.init(supabase);

    const data = await SupabaseDatabase.getCertificate(parseInt(id));
    console.log(data[0]);
    setCerttificate(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    if (id) getData();
  }, [id]);

  const [certificateData, setCertificateData] = useState({
    certNo: "498/2019",
    certDate: "10 FEB 2019",
    name: "Shri JAIN CHINTAN RISHABH",
    address:
      "C-501, SANGATH PEARL MOTERA, NR. H.P.PETROL PUMP, MOTERA, AHMEDABAD",
    dob: "19th-May-2001",
    documents: [
      "The answers and proof submitted by the applicant in the questionnaire.",
      "Date of Birth, Matriculation Pass Certificate, Birth Certificate",
      "Affidavit forfeiting the domicile right of HARYANA State",
      "Inquiry report of - CHANDKHEDA - Police Station Outward Number -678/2019",
    ],
    place: "Ahmedabad",
    signDate: "",
  });

  const [viewOpen, setViewOpen] = React.useState(false);
  if (!certificate) {
    return (
      <div className="absolute z-2 bottom-0 right-0 left-0 top-0 w-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  } else
    return (
      <div className="certificate-container light w-full">
        <div className="header flex justify-center flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png"
            className="logo h-[100px] "
          />
          <h1 className="text-4xl">
            OFFICE OF THE COMMISSIONER OF POLICE, AHMEDABAD
          </h1>
          <p>No: {certificate.id}</p>
        </div>
        <div className="content ">
          <h2 className="text-3xl header flex justify-center flex-col items-center">
            DOMICILE CERTIFICATE
          </h2>
          <p>
            (Issued by authority of Govt. of Gujarat on the basis of evidence
            mentioned below.)
          </p>
          <p>
            This is to certify that <strong>{certificate.name}</strong> R/o{" "}
            {certificate.address} was born in MAHARASHTRA State of Union of
            India on {certificateData.dob} and he is a resident of the State of
            Gujarat. This certificate is issued on the basis of the following
            documents.
          </p>
          <ul>
            {certificateData.documents.map((document, index) => (
              <li key={index}>{document}</li>
            ))}
          </ul>
        </div>
        <div className="signature">
          <p>
            Date: {new Date(certificate.created_at).toDateString()}
            {certificateData.signDate}
          </p>
          <p>(VIJAYKUMAR PATEL)</p>
          <p>Deputy Commissioner of Police</p>
          <p>Control Room, Ahmedabad City</p>
        </div>
        <div>
          <Button
            onClick={() => {
              setViewOpen(true);
            }}
            className="absolute z-2 bottom-0 left-0 m-10 rounded-[50%] p-0 w-[200px] h-[200px] max-sm:w-20 max-sm:h-20"
          >
            <VerifyIcon style={{ scale: "4" }} className="max-sm:scale-50" />
          </Button>
          {
            <Modal
              size="xl"
              isOpen={viewOpen}
              onOpenChange={() => setViewOpen(false)}
            >
              <ModalContent>
                <ModalHeader>Certificate Details</ModalHeader>
                <ModalBody>
                  <div className="text-xl text-500 mb-1">
                    {certificate.name}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Aadhar Number: {certificate.aadhar}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Driving License: {certificate.driving_license}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Electric Bill: {certificate.electric_bil}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Phone: {certificate.phone}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Address: {certificate.address}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Pincode: {certificate.pincode}
                  </div>
                  <div className="text-xl text-500 mb-1">
                    Email Id: {certificate.email}
                  </div>
                  <div
                    className={
                      "text-xl text-500 mb-1 " +
                        (new Date().getFullYear() -
                          new Date(certificate.created_at).getFullYear()) >
                      2
                    }
                  >
                    Issued At: {new Date(certificate.created_at).toDateString()}
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          }
        </div>
      </div>
    );
};

export default Certificate;
