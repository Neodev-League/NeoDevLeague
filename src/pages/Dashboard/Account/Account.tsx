import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthProvider";
import BottomBar from "../DashNav";
import { motion } from "framer-motion";

import "./query.css";

interface ProfileRow {
  name: string;
  editable: boolean;
}

const profileProps: ProfileRow[] = [
  { name: "email", editable: false },
  { name: "fullname", editable: false },
  { name: "school", editable: false },
  { name: "Github", editable: true },
  { name: "Linkedin", editable: true },
  { name: "Website", editable: true },
  { name: "Discord", editable: true },
  { name: "Quote", editable: true },
];

const DashboardAccount: React.FC = () => {
  const { supabase, user } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [Github, setGithub] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [Website, setWebsite] = useState("");
  const [Discord, setDiscord] = useState("");
  const [Quote, setQuote] = useState("");
  const [editing, setEditing] = useState<boolean>(false);

  const updateData = async (row: string, value: string) => {
    const { error } = await supabase
      .from("users")
      .update({ [row]: value })
      .eq("id", user!.id);
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchEssentials = async () => {
      const { data, error } = await supabase
        .from("users")
        .select(`email,fullname,School,Github,Linkedin,Website,Discord,Quote`)
        .eq("id", user!.id);
      console.log(data);

      if (error) {
        console.log(error);
      } else {
        setEmail(data[0]?.email);
        setName(data[0]?.fullname);
        setGithub(data[0]?.Github);
        setLinkedin(data[0]?.Linkedin);
        setWebsite(data[0]?.Website);
        setDiscord(data[0]?.Discord);
        setQuote(data[0]?.Quote);
        setSchool(data[0]?.School || "Coming Soon!");
      }
    };
    fetchEssentials();
  }, [supabase, user]);

  return (
    <div className="relative landscape md:min-h-screen md:pb-20 pb-10 md:overflow-hidden overflow-auto landscape:overflow-auto">
      <div className="absolute inset-0 bg-[url('../../assets/Neo-city.png')] z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <main className="relative z-20 w-full">
        <div className="absolute w-[100%] top-0">
          <div className="bg-white/80 flex items-center justify-center rounded-lg p-5 my-5 flex-col border border-lighterGreen w-[80%] mx-auto">
            <motion.div
              className="text-center md:py-3 py-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mx-5 h-full text-center text-md text-lg md:text-xl text-lighterGreen">
                Profile
              </h1>
            </motion.div>

            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="md:mt-10 mt-2 w-full flex items-center justify-center flex-col">
                <h1 className="sm:text-2xl text-ml text-auto p-5">
                  <span className="text-darkerGreen">Email: </span>
                  <span className="text-lighterGreen font-bold sm:text-xl text-md">
                    {email}
                  </span>
                </h1>
                <h1 className="sm:text-2xl text-ml text-auto p-5">
                  <span className="text-darkerGreen">Name: </span>
                  <span className="text-lighterGreen font-bold sm:text-xl text-md">
                    {name}
                  </span>
                </h1>
                <h1 className="sm:text-2xl text-ml text-auto p-5">
                  <span className="text-darkerGreen">School: </span>
                  <span className="text-lighterGreen font-bold sm:text-xl text-md">
                    {school}
                  </span>
                </h1>
                {profileProps.map((row, index) =>
                  row.editable ? (
                    <div key={index}>
                      <div className="w-full flex items-center justify-center">
                        {editing ? (
                          <div className="sm:text-xl text-md text-auto md:p-5 p-1">
                            <label>
                              <span className="text-darkerGreen">{`${row.name}:`}</span>
                            </label>
                            <input
                              type="text"
                              autoFocus
                              value={
                                row.name === "Github"
                                  ? Github
                                  : row.name === "Linkedin"
                                    ? Linkedin
                                    : row.name === "Website"
                                      ? Website
                                      : row.name === "Discord"
                                        ? Discord
                                        : row.name === "Quote"
                                          ? Quote
                                          : ""
                              }
                              onChange={(e) => {
                                switch (row.name) {
                                  case "Github":
                                    setGithub(e.target.value);
                                    break;
                                  case "Linkedin":
                                    setLinkedin(e.target.value);
                                    break;
                                  case "Website":
                                    setWebsite(e.target.value);
                                    break;
                                  case "Discord":
                                    setDiscord(e.target.value);
                                    break;
                                  case "Quote":
                                    setQuote(e.target.value);
                                    break;
                                }
                              }}
                              className="ml-5 text-lighterGreen focus:outline-lighterGreen"
                            />
                          </div>
                        ) : (
                          <h1 className="sm:text-2xl text-ml text-auto md:p-5 p-3">
                            <span className="text-darkerGreen">{`${row.name}:`}</span>
                            <span className="text-lighterGreen font-bold ml-5 sm:text-xl text-md">
                              {row.name === "Github"
                                ? Github
                                : row.name === "Linkedin"
                                  ? Linkedin
                                  : row.name === "Website"
                                    ? Website
                                    : row.name === "Discord"
                                      ? Discord
                                      : row.name === "Quote"
                                        ? Quote
                                        : "-"}
                            </span>
                          </h1>
                        )}
                      </div>
                    </div>
                  ) : null,
                )}
                <button
                  className="text-lighterGreen font-bold underline mt-10"
                  onClick={() => {
                    if (editing) {
                      for (const row of profileProps) {
                        if (row.editable) {
                          updateData("Github", Github);
                          updateData("Linkedin", Linkedin);
                          updateData("Website", Website);
                          updateData("Discord", Discord);
                          updateData("Quote", Quote);
                        }
                      }
                    }
                    setEditing(!editing);
                  }}
                >
                  {editing ? "Save" : "Edit Information"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <BottomBar />
    </div>
  );
};

export default DashboardAccount;
