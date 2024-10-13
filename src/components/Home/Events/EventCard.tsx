
import { IEvent } from "@/types";
import { formatCreatorAddress } from "@/lib/utils";

const EventCard = ({
  eventDescription,
  imageURI,
  mintedTickets,
  organizer,
}: IEvent) => {
  return (
    <div
      className="p-2 rounded-md flex flex-col gap-2 border border-white/10"
    >
      <div className="flex items-center justify-center overflow-hidden rounded">
        <img src={imageURI} alt="" className="h-96 w-full object-cover" />
      </div>
      <div className="flex items-center justify-between font-semibold">
        <h4 className="md:text-lg">{eventDescription}</h4>
      </div>
      <div className="flex gap-2">
        <p>Creator:</p>
        <p className="font-semibold">{formatCreatorAddress(organizer)}</p>
      </div>
      <div className="flex gap-2">
        <p>Tickets Available:</p>
        <p className="font-semibold">
          {Number(mintedTickets)}
        </p>
      </div>
      <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
        Buy Ticket
      </button>
    </div>
  );
};

export default EventCard;
