import Image from "next/image";
import axios from "axios";

async function getUserData() {
  await new Promise((r)=> setTimeout(r,2000))
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

//async component only in next js added recently for server
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.name}
            </div>
            
            {userDetails?.email}
        </div>
    </div>
</div>
  );
}
