
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Navbarr = () => {
  return (
<Navbar className="bg-gradient-to-b from-transparent via-transparent to-transparent py-4 " style={{ backdropFilter: 'blur(10px)' }}>
      <NavbarBrand className="flex items-center h-full">
        <p className="font-bold text-white tracking-widest text-lg pl-9">NEO</p> 
      </NavbarBrand>
      <NavbarContent className="text-white hidden sm:flex gap-4 ml-auto items-center h-full"style={{ fontFamily: 'Poppins, sans-serif' }}>
        <NavbarItem>
          <Link color="foreground" href="#">
            Mission
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex items-center h-full pr-4">
          <Link href="#" className="text-white">Login</Link> 
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbarr;
