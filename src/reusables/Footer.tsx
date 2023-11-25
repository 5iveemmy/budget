import { Flex, Image, Text } from "@chakra-ui/react"
import homeIcon from "@/assets/homeIcon.svg"
import reportsIcon from "@/assets/reportsIcon.svg"
import chatIcon from "@/assets/chatIcon.svg"
import budgetIcon from "@/assets/budgetIcon.svg"
import profileIcon from "@/assets/profileIcon.svg"

interface Props {
  icon: string
  text: string
  bold?: boolean
}
const FooterICons = ({ icon, text, bold }: Props) => {
  return (
    <Flex flexDir="column" gap="10px">
      <Image src={icon} />
      <Text color={bold ? "#001233s" : "#c1c4cd"} fontSize="12px">
        {text}
      </Text>
    </Flex>
  )
}

const Footer = () => {
  return (
    <Flex
      p="20px 35px 18px 25px"
      bgColor="#fff"
      boxShadow=" 0px -5px 20px 5px rgba(0, 0, 0, 0.04)"
      alignItems="center"
      justifyContent="space-between"
    >
      <FooterICons icon={homeIcon} text="Home" />
      <FooterICons icon={reportsIcon} text="Reports" />
      <FooterICons icon={chatIcon} text="Chat" />
      <FooterICons icon={budgetIcon} text="Budget" bold />
      <FooterICons icon={profileIcon} text="Profile" />
    </Flex>
  )
}

export default Footer
