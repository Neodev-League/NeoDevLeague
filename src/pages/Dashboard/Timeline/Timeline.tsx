import React, { useState } from "react";
import BottomBar from "../DashNav";
import { motion } from "framer-motion";
import { Clock, Users, Award, Utensils, Dices } from "lucide-react";
import SparklesText from "../../../components/sparkles-text";

interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  icon: React.ReactNode;
  type:
    | "Main Event"
    | "Activity"
    | "Game"
    | "Special";
}

const events: Event[] = [
  {
    id: "1",
    title: "Registration",
    start: "8:00am",
    end: "9:00am",
    description: "Check-in and get your event materials",
    icon: <Users className="w-5 h-5" />,
    type: "Main Event",
  },
  {
    id: "2",
    title: "Opening Ceremony",
    start: "9:00am",
    end: "9:30am",
    description: "Welcome address and event kickoff",
    icon: <Award className="w-5 h-5" />,
    type: "Main Event",
  },
  {
    id: "3",
    title: "Competition Begins",
    start: "10am",
    end: "8pm",
    description: "Main hacking and development time",
    icon: <Clock className="w-5 h-5" />,
    type: "Main Event",
  },
  {
    id: "4",
    title: "Mini Game 1",
    start: "11am",
    end: "",
    description: "Each Team sends a participant onto the stage. Winner wins 2 points towards their final point total after judging.",
    icon: <Dices className="w-5 h-5" />,
    type: "Game",
  },
  {
    id: "5",
    title: "Mini Game 2",
    start: "1pm",
    end: "",
    description: "Each Team sends a participant onto the stage. Winner wins 2 points towards their final point total after judging.",
    icon: <Dices className="w-5 h-5" />,
    type: "Game",
  },
  {
    id: "6",
    title: "Lunch Time",
    start: "12:30pm",
    end: "",
    description:
      "It's lunch time! Come over to the kitchen one team at a time to get some good food!",
    icon: <Utensils className="w-5 h-5" />,
    type: "Activity",
  },
  {
    id: "7",
    title: "Mini Game 3",
    start: "3pm",
    end: "",
    description: "Each Team sends a participant onto the stage. Winner wins 2 points towards their final point total after judging.",
    icon: <Dices className="w-5 h-5" />,
    type: "Game",
  },
  {
    id: "8",
    title: "Mini Game 4",
    start: "5pm",
    end: "",
    description: "Each Team sends a participant onto the stage. Winner wins 2 points towards their final point total after judging.",
    icon: <Dices className="w-5 h-5" />,
    type: "Game",
  },
  {
    id: "9",
    title: "Mini Game 5",
    start: "7pm",
    end: "",
    description: "Each Team sends a participant onto the stage. Winner wins 2 points towards their final point total after judging.",
    icon: <Dices className="w-5 h-5" />,
    type: "Game",
  },
  {
    id: "10",
    title: "Dinner Time",
    start: "6:30pm",
    end: "",
    description:
      "It's dinner time! Come over to the kitchen one team at a time to get some amazing eats!",
    icon: <Utensils className="w-5 h-5" />,
    type: "Activity",
  },
  {
    id: "11",
    title: "Judging",
    start: "8:00pm",
    end: "9:00pm",
    description: "Project evaluation by judges. Get points to win prizes!",
    icon: <Award className="w-5 h-5" />,
    type: "Main Event",
  },
  {
    id: "12",
    title: "Closing Ceremony + Prizes & Awards",
    start: "9:30pm",
    end: "10:30pm",
    description: "Final presentations and award ceremony. Prizes and medals handed out now!",
    icon: <Award className="w-5 h-5" />,
    type: "Special",
  },
];

const TimelineEvent: React.FC<{
  event: Event;
  isSelected: boolean;
  onClick: () => void;
}> = ({ event, isSelected, onClick }) => {
  return (
    <motion.div
      className={`p-4 rounded-lg cursor-pointer ${
        isSelected ? "bg-opacity-20 bg-white" : "bg-opacity-10 bg-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${getEventTypeColor(
            event.type
          )}`}
        >
          {event.icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
      </div>
      <p className="text-ms text-white mb-1">
        {event.start} {event.end && `- ${event.end}`}
      </p>
      {isSelected && (
        <p className="text-ms text-white">{event.description}</p>
      )}
    </motion.div>
  );
};

const getEventTypeColor = (type: Event["type"]) => {
  switch (type) {
    case "Main Event":
      return "bg-blue-500";

    case "Activity":
      return "bg-yellow-500";

    case "Special":
      return "bg-red-500";
    default:
      return "bg-green-500";
  }
};

const TimelinePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[url('../../assets/Neo-city.png')] bg-cover bg-center">
      <div className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="relative z-20 p-8">
        <div className="text-center pb-12 pt-6">
          <h1 className="pt-8 text-xl md:text-4xl font-extrabold text-[#D1FAE5]">
            NeoDev League
          </h1>
          <SparklesText text="Schedule" />
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-80 rounded-lg p-6">
          <p className="text-white text-center mb-6">
            Official Dev Summit Timeline!
          </p>
          <p className="text-white text-center mb-6 font-bold">
            Check out what we have planned for the event! 🎉
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Main Event","Mini Game", "Activity", "Special"].map((type) => (
              <div key={type} className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${getEventTypeColor(
                    type as Event["type"]
                  )} mr-1`}
                ></div>
                <span className="text-md text-white">{type}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {events.map((event) => (
              <TimelineEvent
                key={event.id}
                event={event}
                isSelected={selectedEvent === event.id}
                onClick={() =>
                  setSelectedEvent(event.id === selectedEvent ? null : event.id)
                }
              />
            ))}
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default TimelinePage;
