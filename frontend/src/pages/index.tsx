import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex, Text } from "@chakra-ui/layout";
import Login from "@/components/pages/login";
import useLocalStorage from "@/hook/useLocalStorage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Login />
    </Flex>
  );
}
