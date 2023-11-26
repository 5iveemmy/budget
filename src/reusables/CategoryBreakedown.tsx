import { Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

interface Props {
  text: string
  icon: string
  percentage: number
  regulaPrice: string
  salePrice: string
}

const CategoryBreakedown = ({
  icon,
  text,
  percentage,
  regulaPrice,
  salePrice,
}: Props) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap="10px" alignItems="center">
        <Image src={icon} />
        <Flex flexDir="column">
          <Text fontSize="14px" fontWeight="500">
            {text}
          </Text>
          <Text fontSize="14px" letterSpacing="-0.07px">
            {percentage}%
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Text letterSpacing="-0.08px">₦{salePrice}</Text>/
        <Text color="#C1C4CD" letterSpacing="-0.08px">
          ₦{regulaPrice}
        </Text>
      </Flex>
    </Flex>
  )
}

export default CategoryBreakedown
