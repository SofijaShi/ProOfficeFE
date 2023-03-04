import { GridTable } from "./GridTable";
import { useState } from "react";
import { BookingModal } from "./BookingModal";
import { useEffect } from "react";
import { fetchResources } from "../data/dataAccess";

export const ContentWrapper = () => {
  const [isOpenBookingModal, setIsOpenBookingModal] = useState(false)
  const [resource, setResource] = useState("")
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchResources();
      const modifiedResourcesData = data.result.map(resource => ({...resource, book: "book here"}));
      setResources(modifiedResourcesData);
    }
    fetchData();
  }, []);

  const onClick = (row) => {
    setIsOpenBookingModal(true)
    setResource(row)
  }

  return (
    <div>
      <GridTable data={resources} headers={["id", "name", "book"]} onRowClick={onClick}/>
      {isOpenBookingModal && 
        <BookingModal isOpen={isOpenBookingModal} setIsOpen={setIsOpenBookingModal} resource={resource}/>}
    </div>
  );
}
