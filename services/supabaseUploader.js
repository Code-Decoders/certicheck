const SupabaseUploader = {
  client: null,

  init(supabaseClient) {
    this.client = supabaseClient;
  },

  async upload(filePath, file) {
    if (!this.client) {
      throw new Error("Supabase client is not initialized.");
    }
    console.log("filePath", filePath);

    const { data, error } = await this.client.storage
      .from("Certicheck")
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    return data;
  },

  async download(name) {
    if (!this.client) {
      throw new Error("Supabase client is not initialized.");
    }

    const { data, error } = await this.client.storage
      .from("Certicheck")
      .download(name);

    if (error) {
      throw error;
    }

    return data;
  },
};

export default SupabaseUploader;