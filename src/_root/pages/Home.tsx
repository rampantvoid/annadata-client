import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input";
const Home = () => {
  const [isAvailable, setAvailable] = useState(true);
  const [isVolunteer, setVolunteer] = useState(false);
  const organizations = [
    {name:"Building Dreams Foundation",logo:"https://media.licdn.com/dms/image/C5103AQEDJ1mD5KbGYA/profile-displayphoto-shrink_800_800/0/1572984608027?e=2147483647&v=beta&t=0Ru_X20ojFvFNZ0xRfYOIejFLlRQVpAc5aDJkfWfdOU"},
    {name:"Niti Aayog",logo:"https://analyticsindiamag.com/wp-content/uploads/2020/12/NITI-Aayog-Banner.jpg"},
    {name:"Akshaya Patra Foundation",logo:"https://assets.thehansindia.com/h-upload/2020/09/22/1000604-akshaya-patra-foundation.webp"}
  ];
  if (isVolunteer) {
    // TODO: Volunteer screen
  }

  return (
    <ScrollArea className="h-full">
      <style>
        {`.icon-shadow{
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }`}
      </style>
      <div className="w-full h-full flex flex-col gap-4 p-3">
        {/* request button */}
        <Link to="/pickupDetails">
          <div className="w-full flex flex-col bg-secondary rounded-xl transition-all">
            <Button
              disabled={!isAvailable}
              className="h-32 bg-primary focus:bg-secondary justify-between"
            >
              <img src="/pickup.png" alt="" className="object-contain w-32 scale-125" />
              <p className="text-3xl font-semibold flex-1">Request Pickup</p>
            </Button>
            {/* {!isAvailable && (
            <p className="p-3 rounded-md font-semibold">
            Already Placed one Request
            </p>
          )} */}
          </div>
        </Link>

        {/* support us */}
        <p className="text-3xl font-bold ">
          {" "}
          Support <span className="text-primary">Us</span>
        </p>
        <div className="flex p-2 justify-between gap-2">
        <Drawer>
          <div className="bg-white w-full h-28 rounded-md flex flex-col justify-center items-center icon-shadow">
            <img src="/coin.png" alt="" className="w-20 object-contain" />
            <DrawerTrigger asChild>
              <p className="font-semibold text-primary">Fund Us</p>
            </DrawerTrigger>

          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Select Your Donation Amount</DrawerTitle>
              <DrawerDescription>We are a small platform that relies on donations to cover server costs</DrawerDescription>
            </DrawerHeader>
              <div className="flex">
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹20</Button>
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹50</Button>
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹100</Button>
                <Input className="w-1/3" defaultValue="Custom Amount"></Input>
              </div>
            <DrawerFooter>
              <DrawerClose asChild>
              <Button>Submit</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
          <div className="bg-white w-full h-28 rounded-md flex flex-col justify-center items-center icon-shadow">
            <img src="/tree.png" alt="" className="w-20 object-contain" />
            <p className="font-semibold text-primary">Plant Tree</p>
          </div>
          <div className="bg-white w-full h-28 rounded-md flex flex-col justify-center items-center icon-shadow">
            <img
              src="/flooded-house.png"
              alt=""
              className="w-20 object-contain"
            />
            <p className="font-semibold text-primary">Relief Fund</p>
          </div>
        </div>

        {/* ngos */}
        <p className="text-3xl font-bold ">
          Our <span className="text-primary">Partners</span>
        </p>
        <Drawer>
        {organizations.map((org)=>{
          return <div className="w-full h-64 bg-white icon-shadow rounded-md flex flex-col">
          <img
            src={org.logo}
            alt=""
            className="w-full h-3/4 object-cover rounded-t-md"
          />
          <div className="w-full flex p-2 px-4 justify-between items-center">
            <p className="font-semibold capitalize text-primary">
              {org.name}
            </p>
            <DrawerTrigger asChild>
              <Button>Donate</Button>
            </DrawerTrigger>
          </div>
        </div>
        })}
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Select Your Donation Amount</DrawerTitle>
            </DrawerHeader>
              <div className="flex">
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹20</Button>
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹50</Button>
                <Button className="focus:bg-primary focus:text-white" variant="outline">₹100</Button>
                <Input className="w-1/3" defaultValue="Custom Amount"></Input>
              </div>
            <DrawerFooter>
              <DrawerClose asChild>
              <Button>Submit</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default Home;
