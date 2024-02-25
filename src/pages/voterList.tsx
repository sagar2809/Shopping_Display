import React from "react";
import VoterTable from "@/components/VoterTable/voterTable";
import Filter from "@/components/Filter/filter";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb";
import { useDebounce } from "@/hooks/useDebounce";
import ReactPaginate from "react-paginate";
import useVoterList from "@/hooks/useVoterList";

const VoterList = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [votersName, setVotersName] = React.useState("");
  const debouncedString = useDebounce(votersName, 500);
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const { voterList = [], mutateAsync, isLoading } = useVoterList();
  const currentItems = voterList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(voterList.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % voterList.length;
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    mutateAsync(debouncedString);
  }, [debouncedString, mutateAsync]);

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={["Home", "Voter List"]} />
      <div className="px-4 py-2 text-xl bg-white mx-4 flex items-center rounded-md">
        Voter List
      </div>
      <div className="bg-white mx-4 rounded-md">
        <Filter
          onChange={setVotersName}
          placeholder="Search your name here..."
        />
        {isLoading ? (
          <div className="flex justify-center text-xl pt-4">Loading...</div>
        ) : (
          <VoterTable voters={currentItems} />
        )}
        <div className="flex gap-2 justify-center items-center m-4">
          <select
            className="border border-black mb-4 mt-2"
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={10}>Per page</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            pageCount={pageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={0}
            pageClassName="select-none cursor-pointer"
            nextClassName="select-none cursor-pointer"
            previousClassName="select-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VoterList;
