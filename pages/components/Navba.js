import React from "react";
import { Link, Box, Flex, Text, Button, Stack,Menu,MenuButton,MenuList,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider, } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
const NavBa = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBaContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBaContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
    
  <MenuItem as={Button} bgColor="gray" color={"black"} to="/">
    Home
  </MenuItem>
  <Menu>
  <MenuButton as={Button} bgColor="gray" color={"black"}  rightIcon={<ChevronDownIcon />}>
  Committees
  </MenuButton>
  <MenuList>
        <MenuItem to="/committees" color={"black"}>Core Committee </MenuItem>
        <MenuItem to="/categories" color={"black"}>Advisory Committee  </MenuItem>
        <MenuItem to="/imp" color={"black"}>Organising Committee  </MenuItem>
  </MenuList></Menu>
  <Menu>
  <MenuButton as={Button} bgColor="gray" color={"black"}  rightIcon={<ChevronDownIcon />}>
  Categories
  </MenuButton>
  <MenuList>
        <MenuItem to="/categories/generalInstructions" color={"black"}>General Instructions </MenuItem>
        <MenuItem to="/categories/researchExcellence" color={"black"}>Research Excellence (National/Regional)  </MenuItem>
        <MenuItem to="/categories/academicExcellence" color={"black"}>Academic Excellence (National/Regional)</MenuItem>
        <MenuItem to="/categories/industryExcellence" color={"black"}>Industry Excellence Award</MenuItem>
  </MenuList>
</Menu>
<MenuItem as={Button} bgColor="gray" color={"black"} to="/imp">
    Imp Dates
</MenuItem>  
<MenuItem as={Button} bgColor="gray" color={"black"} to="/register">
    Registration
</MenuItem>  
<MenuItem as={Button} bgColor="gray" color={"black"} to="/photo">
    Photo-Gallery
</MenuItem>   

      </Stack>
    </Box>
  );
};

const NavBaContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    //   mb={4}
    //   p={2}
    //   bgImg={["bck.jpg"]}
    bgColor={["gray"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBa;
