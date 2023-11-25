import { SupabaseClient } from "@supabase/supabase-js";
import SupabaseDatabase from "../../../services/supabaseDatabase";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  const { tokenId } = req.query;

  SupabaseDatabase.init(
    new SupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  );
  const json = (await SupabaseDatabase.getCertificate(tokenId))[0];
  console.log("json", json);
  res.status(200).json({
    name: json.type + " #" + json.id,
    description: json.type + " Certificate",
    // TODO: Add image URL
    image:
      "https://madhuriesingh.com/wp-content/uploads/2018/02/Domicile-Certificate.jpg",
    attributes: Object.keys(json).map((key) => {
      return {
        trait_type: key,
        value: json[key],
      };
    }),
  });
}
