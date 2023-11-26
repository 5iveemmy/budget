import { Flex, Image, Text } from "@chakra-ui/react"
import headerIcon from "@/assets/headerIcon.svg"

const Header = () => {
  return (
    <Flex p="14px 15.5px 12px 20px" justifyContent="space-between">
      <Text fontSize="15px" fontWeight="600">
        9:41
      </Text>
      <Image src={headerIcon} />
    </Flex>
  )
}

export default Header
