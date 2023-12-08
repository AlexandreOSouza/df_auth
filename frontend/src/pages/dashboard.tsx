import { LOCAL_STORAGE_KEY } from "@/helpers/consts";
import nookies from "nookies";

export default function Dashboard({ user }) {
  return <h1>dashboard username: {user.username}</h1>;
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  const token = cookies[LOCAL_STORAGE_KEY];
  const res = await fetch("http://localhost:3000/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await res.json();

  if (res.status !== 200) {
    nookies.destroy(ctx, LOCAL_STORAGE_KEY);
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
