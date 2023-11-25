const SupabaseDatabase = {
  client: null,

  init(supabaseClient) {
    this.client = supabaseClient;
  },

  async createCertificate(certificateData) {
    if (!this.client) {
      throw new Error("Supabase client is not initialized.");
    }

    const { data, error } = await this.client
      .from("certificates")
      .insert(certificateData);

    if (error) {
      throw error;
    }

    return data;
  },

  async getCertificate(tokenId) {
    if (!this.client) {
      throw new Error("Supabase client is not initialized.");
    }

    const { data, error } = await this.client
      .from("certificates")
      .select("*")
      .eq("id", tokenId);

    if (error) {
      throw error;
    }

    return data;
  },

  async getAllCertificates() {
    if (!this.client) {
      throw new Error("Supabase client is not initialized.");
    }

    const { data, error } = await this.client.from("certificates").select("*");

    if (error) {
      throw error;
    }

    return data;
  },
};

export default SupabaseDatabase;
