import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  // const [isCreating, setIsCreating] = useState(false);
  // const [resultImageUrl, setResultImageUrl] = useState(undefined);

  // const handleSubmit = async () => {
  //   try {
  //     setIsCreating(true);
  //     const res = await axios.post("/api/create", { text_input: prompt });
  //     setIsCreating(false);
  //     setResultImageUrl(res.data.uri);
  //   } catch (e) {
  //     console.error(e);
  //     setIsCreating(false);
  //   }
  // };
  return (
    <main className="p-4 relative main-content">
      <h1 className="text-4xl font-bold absolute top-0 left-0 text-white" style={{ padding: '10px' }}>Neocity.network</h1>
      <div className="flex justify-center">
        <Image
          src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/13b93f61f282a10f345672d6447a915cb4712b03b2935a81b1e4725e462a20a9.jpg"
          className="rounded-lg shadow-lg"
          alt="Neocity.network"
          width={1600}
          height={1024}
        />
      </div>
    </main>
  );
}
