import { Text, TextProps } from "@chakra-ui/layout";

export default function ErrorText(props: TextProps) {
  return <Text fontSize={"14px"} color={"red"} {...props} />;
}
