import React from "react";
import DefaultLayout from "@/layouts/default";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import styles from "@/styles/Create.module.css";
import { useRouter } from "next/router";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import SupabaseUploader from "@/services/supabaseUploader";
import SupabaseDatabase from "@/services/supabaseDatabase";
import ethersService from "@/services/ethers";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const CreateDesign = () => {
  const router = useRouter();
  const type = router.query.type;
  const supabase = createClientComponentClient();
  const [file, setFile] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [aadhar, setAadhar] = React.useState("");

  const createCertificate = async () => {
    SupabaseUploader.init(supabase);
    SupabaseDatabase.init(supabase);

    const pdfName = uuidv4();
    const imageName = uuidv4();

    await SupabaseUploader.upload(pdfName + ".pdf", file);

    const latestTokenId = await ethersService.getLatestTokenId();

    const data = await SupabaseDatabase.createCertificate({
      id: parseInt(latestTokenId),
      name,
      email,
      phone: mobile,
      aadhar,
      file_id: pdfName,
      thumbnail_id: imageName,
      type,
    });

    await ethersService.safeMint();

    alert("Certificate Created Successfully");
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <DefaultLayout>
      <Card style={{ marginBottom: "20px" }}>
        <CardBody>
          <div className={styles.header}>
            <h1>{type && type.toUpperCase()} / Create Certificate</h1>
            <div className={styles.updateRow}>
              <Button color="primary" size="md" onClick={createCertificate}>
                Save
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="flex w-full gap-x-5">
            <div className="flex-1">
              <Input
                isRequired
                type="name"
                label="Name"
                defaultValue="Junior"
                className="max-w-xl mb-4"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                isRequired
                type="email"
                label="Email"
                defaultValue="junior@nextui.org"
                className="max-w-xl mb-4"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                isRequired
                type="mobile"
                label="Mobile No."
                className="max-w-xl mb-4"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <Input
                isRequired
                type="aadhar"
                label="Aadhar Number"
                defaultValue="0000 0000 0000"
                className="max-w-xl"
                onChange={(e) => {
                  setAadhar(e.target.value);
                }}
              />
            </div>
            <div className="flex-1">
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                className="bg-default-100 rounded-medium outline-none h-14 px-3 py-3 is-filled"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </DefaultLayout>
  );
};

export default CreateDesign;
