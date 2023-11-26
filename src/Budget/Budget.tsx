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
import foodandDrinkIcon from "@/assets/foodandDrinkIcon.svg"
import savingsIcon from "@/assets/savingsIcon.svg"
import menuIcon from "@/assets/menuIcon.svg"
import Footer from "@/reusables/Footer"
import CategoryBreakedown from "@/reusables/CategoryBreakedown"
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const tabStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "rgb(124, 123, 123, 0.5)",
}

const Budget = () => {
  return (
    <Box>
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
            <TabList width="100%" borderBottom="none">
              <Tab sx={tabStyle} _selected={{ color: "#0466C8" }}>
                Last month
              </Tab>
              <Tab sx={tabStyle} _selected={{ color: "#0466C8" }}>
                This month
              </Tab>
            </TabList>
            <Image src={menuIcon} />
          </Flex>
          <TabIndicator height="2px" bg="#0466C8" />
          <TabPanels>
            <TabPanel pt="30px">
              <Flex
                justifyContent="center"
                flexDir="column"
                gap="21px"
                alignItems="center"
              >
                <Box width="150px">
                  <CircularProgressbarWithChildren
                    value={100}
                    text="20%"
                    strokeWidth={6}
                    styles={buildStyles({
                      textColor: "#0466C8",
                      pathColor: "rgb(4, 102, 200, 0.4)",
                      trailColor: "transparent",
                    })}
                  >
                    <div style={{ width: "88%" }}>
                      <CircularProgressbar
                        value={20}
                        styles={buildStyles({
                          trailColor: "transparent",
                          pathColor: "#0466C8",
                        })}
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                </Box>
                <Flex flexDir="column" gap="5px" alignItems="center">
                  <Text color="#707480" fontSize="14px" letterSpacing="-0.07px">
                    Amount spent so far
                  </Text>
                  <Flex>
                    <Text letterSpacing="-0.08px" color="#0466C8">
                      ₦20,000
                    </Text>
                    /
                    <Text color="#67A2DC" letterSpacing="-0.08px">
                      ₦60,000
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel pt="30px">
              <Flex
                justifyContent="center"
                flexDir="column"
                gap="21px"
                alignItems="center"
              >
                <Box width="150px">
                  <CircularProgressbarWithChildren
                    value={100}
                    text="49%"
                    strokeWidth={6}
                    styles={buildStyles({
                      textColor: "#0466C8",
                      pathColor: "rgb(4, 102, 200, 0.4)",
                      trailColor: "transparent",
                    })}
                  >
                    <div style={{ width: "88%" }}>
                      <CircularProgressbar
                        value={49}
                        styles={buildStyles({
                          trailColor: "transparent",
                          pathColor: "#0466C8",
                        })}
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                </Box>
                <Flex flexDir="column" gap="5px" alignItems="center">
                  <Text color="#707480" fontSize="14px" letterSpacing="-0.07px">
                    Amount spent so far
                  </Text>
                  <Flex>
                    <Text letterSpacing="-0.08px" color="#0466C8">
                      ₦50,000
                    </Text>
                    /
                    <Text color="#67A2DC" letterSpacing="-0.08px">
                      ₦120,000
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box pt="17px">
          <Text fontSize="28px" fontWeight="700">
            Category Breakdown
          </Text>
          <Flex flexDir="column" gap="17px" mt="20px">
            <CategoryBreakedown
              text="Food and Drink"
              percentage={40}
              regulaPrice="42,000"
              salePrice="20,000"
              icon={foodandDrinkIcon}
            />
            <CategoryBreakedown
              text="Savings"
              percentage={20}
              regulaPrice="24,000"
              salePrice="10,000"
              icon={savingsIcon}
            />
            <CategoryBreakedown
              text="Food and Drink"
              percentage={40}
              regulaPrice="42,000"
              salePrice="20,000"
              icon={foodandDrinkIcon}
            />
            <CategoryBreakedown
              text="Savings"
              percentage={20}
              regulaPrice="24,000"
              salePrice="10,000"
              icon={savingsIcon}
            />
            <CategoryBreakedown
              text="Food and Drink"
              percentage={40}
              regulaPrice="42,000"
              salePrice="20,000"
              icon={foodandDrinkIcon}
            />

            <CategoryBreakedown
              text="Savings"
              percentage={20}
              regulaPrice="24,000"
              salePrice="10,000"
              icon={savingsIcon}
            />
            <CategoryBreakedown
              text="Food and Drink"
              percentage={40}
              regulaPrice="42,000"
              salePrice="20,000"
              icon={foodandDrinkIcon}
            />
            <CategoryBreakedown
              text="Savings"
              percentage={20}
              regulaPrice="24,000"
              salePrice="10,000"
              icon={savingsIcon}
            />
            <CategoryBreakedown
              text="Food and Drink"
              percentage={40}
              regulaPrice="42,000"
              salePrice="20,000"
              icon={foodandDrinkIcon}
            />
          </Flex>
        </Box>
      </Box>
      <Box position="sticky" bottom="0px" width="100%" height="auto">
        <Footer />
      </Box>
    </Box>
  )
}

export default Budget
