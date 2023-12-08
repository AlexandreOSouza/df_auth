import HeaderText from "@/components/base/text/Header";
import { LOCAL_STORAGE_KEY } from "@/helpers/consts";
import { Flex } from "@chakra-ui/layout";
import nookies from "nookies";

export default function Dashboard({ user }) {
  return (
    <Flex height={"100vh"} p={18}>
      <HeaderText>You are logged in</HeaderText>
      <HeaderText>Welcome {user.name}</HeaderText>
    </Flex>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  const token = cookies[LOCAL_STORAGE_KEY];
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/profile`, {
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
