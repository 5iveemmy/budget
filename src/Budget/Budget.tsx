import Header from "@/reusables/Header"
import {
  Box,
  Flex,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import blueNairaIcon from "@/assets/blueNairaIcon.svg"
import menuIcon from "@/assets/menuIcon.svg"
import Footer from "@/reusables/Footer"

const tabStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "rgb(124, 123, 123, 0.5)",
}

const Budget = () => {
  return (
    <>
      <Header />
      <Box p="20px 30px">
        <Text fontSize="28px" fontWeight="700">
          Budget
        </Text>
        <Flex gap="10px" alignItems="center" mt="28px">
          <Image src={blueNairaIcon} />
          <Text color="#707480" fontSize="14px" letterSpacing="-0.07px">
            Monthly Budget
          </Text>
        </Flex>
        <Box
          mt="10px"
          bgColor="#fff"
          boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
          borderRadius="10px"
          p="9px 9px 6px 20px"
        >
          <Text fontSize="28px" fontWeight="700" letterSpacing="-1.4px">
            ₦120,000
          </Text>
        </Box>
        <Tabs mt="30px" position="relative">
          <Flex justifyContent="space-between">
            <TabList>
              <Tab sx={tabStyle} _selected={{ color: "#0466C8" }}>
                Last month
              </Tab>
              <Tab sx={tabStyle} _selected={{ color: "#0466C8" }}>
                This month
              </Tab>
            </TabList>
            <Image src={menuIcon} />
          </Flex>
          <TabIndicator height="2px" bg="#0466C8" width="20px" />
          <TabPanels>
            <TabPanel>
              <p>one</p>
            </TabPanel>
            <TabPanel>
              <p>Two</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box>
          <Text fontSize="28px" fontWeight="700">
            Category Breakdown
          </Text>
        </Box>
      </Box>
      <Box position="fixed" bottom="0px" width="100%" height="210px">
        <Footer />
      </Box>
    </>
  )
}

export default Budget
