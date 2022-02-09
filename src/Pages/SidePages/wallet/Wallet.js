import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SettingsIcon from "@mui/icons-material/Settings";
import WalletTable from "../../../Component/Wallet/WalletTable";
import AddTotal from "../../../Component/Wallet/AddTotal";
import AddWallet from "../../../Component/Wallet/AddWallet";

import { useSelector, useDispatch } from "react-redux";
import * as roles from "../../../constantData/Roles";
import * as action from "../../../Redux/action";
const Wallet = () => {
  // const [age, setAge] = useState(top100Films[0]);
  const [isTotalOpen, setIsTotalOpen] = useState(false);

  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const [isError, setIsError] = useState({
    formStatus: false,
    msg: "",
  });
  const [totalData, setTotalData] = useState({
    totalEarned: "",
    reputationScore: "",
    pentestCompleted: "",
  });

  const [walletDetail, setWalletDetail] = useState({
    pentest: "",
    award: "",
    status: "",
  });

  const [hackerId, setHackerId] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // console.log(value);
  // !Redux
  const dispatch = useDispatch();
  // const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);
  const { AllPentest, allHacker } = useSelector((state) => state.wallet);
  // * Functions

  // const getCompanyId = (role) => {
  //   if (role === "superAdmin") {
  //     return selectedCompany;
  //   }
  //   return userDetails?.company_id?._id;
  // };

  //* COMPANY ID
  // const company_id = getCompanyId(userRole);
  let company_id;
  if (userRole === roles.admin) {
    company_id = userDetails?.company_id?._id;
  }

  // console.log(company_id);
  const handleTotalChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTotalData({ ...totalData, [name]: value });
  };

  const handleWalletChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "award") {
      value = e.target.value.replace(/\D/, "");
      // console.log(value, "I want number");
    }

    setWalletDetail({ ...walletDetail, [name]: value });
  };
  const openIsWalletOpen = () => {
    setIsWalletOpen(true);
  };
  const closeIsWalletOpen = () => {
    setIsWalletOpen(false);
    setWalletDetail({
      ...walletDetail,
      pentest: "",
      award: "",
      status: "",
      hackerId: "",
    });
  };

  const openTotalModal = () => {
    setIsTotalOpen(true);
  };

  const closeTotalModal = () => {
    setIsTotalOpen(false);
    setTotalData({
      ...totalData,
      totalEarned: "",
      reputationScore: "",
      pentestCompleted: "",
    });
  };
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const submitTotal = (e) => {
    e.preventDefault();
    console.log(totalData);
    closeTotalModal();
  };
  const onSubmitWallet = (e) => {
    e.preventDefault();
    if (!hackerId) {
      setIsError({
        ...isError,
        formStatus: true,
        msg: "Please select security Researcher",
      });
    }
    if (hackerId) {
      const data = {
        pentestId: walletDetail.pentest,
        award: walletDetail.award,
        status: walletDetail.status,
        userId: hackerId,
      };
      console.log(data);
      closeIsWalletOpen();
    }
  };

  // call pentest for admin
  useEffect(() => {
    if (userRole === roles.admin) {
      dispatch(action.allPentestWithCompanyRequest({ company_id }));
      dispatch(action.allHackerWithCompanyRequest({ company_id }));
    }
  }, [userRole]);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsError({ ...isError, formStatus: false, msg: "" });
    }, 4000);

    return () => clearTimeout(time);
  }, [isError.msg]);

  return (
    <div>
      <div className="w-full rounded-lg shadow-sm bg-white pl-7 py-10 ">
        <div className="max-w-lg">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Security Research Role
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hackerId}
              label="Security Research Role"
              onChange={(e) => setHackerId(e.target.value)}
              required
            >
              {allHacker &&
                allHacker.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.user_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="mt-4  px-[5%]">
        <div className="min-w-[500px] overflow-x-auto">
          <div className="w-full flex justify-end items-center gap-3 mb-3">
            <button
              onClick={openTotalModal}
              className="px-10 py-2 bg-primary-btn rounded-md text-white tracking-wider "
            >
              Edit
            </button>
            <button
              onClick={openTotalModal}
              className="px-10 py-2 bg-primary-btn rounded-md text-white tracking-wider "
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-9 gap-x-2 items-center">
            <div className="col-span-3  text-center">
              <div className="max-w-[250px] ">
                <h1 className="text-8xl mt-2">$XX</h1>
                <h4 className="text-2xl">Total Earned</h4>
              </div>
            </div>
            <div className="col-span-3  text-center relative">
              <h1 className="text-8xl mt-2">X</h1>
              <h4 className="text-2xl">Reputation Score</h4>
            </div>
            <div className="col-span-3   text-center relative">
              <h1 className="text-8xl mt-2">XX</h1>
              <h4 className="text-2xl">Pentest Completed</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-8 px-[5%]">
        <div className="pr-3">
          <button
            type="button"
            className=" px-10 py-2 bg-primary-btn text-white rounded-md  tracking-wider"
            onClick={openIsWalletOpen}
          >
            Add
          </button>
        </div>
      </div>
      <div className="px-[5%] mt-3 mb-4">
        <WalletTable />
      </div>
      <AddTotal
        isTotalOpen={isTotalOpen}
        closeTotalModal={closeTotalModal}
        totalData={totalData}
        handleTotalChange={handleTotalChange}
        submitTotal={submitTotal}
      />
      <AddWallet
        isWalletOpen={isWalletOpen}
        openIsWalletOpen={openIsWalletOpen}
        closeIsWalletOpen={closeIsWalletOpen}
        handleWalletChange={handleWalletChange}
        walletDetail={walletDetail}
        onSubmitWallet={onSubmitWallet}
        AllPentest={AllPentest}
        isError={isError}
      />
    </div>
  );
};

export default Wallet;

// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
//   { label: "The Godfather: Part II", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
//   { label: "12 Angry Men", year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: "Pulp Fiction", year: 1994 },
//   {
//     label: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },
//   { label: "The Good, the Bad and the Ugly", year: 1966 },
//   { label: "Fight Club", year: 1999 },
//   {
//     label: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//   },
//   {
//     label: "Star Wars: Episode V - The Empire Strikes Back",
//     year: 1980,
//   },
//   { label: "Forrest Gump", year: 1994 },
//   { label: "Inception", year: 2010 },
//   {
//     label: "The Lord of the Rings: The Two Towers",
//     year: 2002,
//   },
//   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { label: "Goodfellas", year: 1990 },
//   { label: "The Matrix", year: 1999 },
//   { label: "Seven Samurai", year: 1954 },
//   {
//     label: "Star Wars: Episode IV - A New Hope",
//     year: 1977,
//   },
//   { label: "City of God", year: 2002 },
//   { label: "Se7en", year: 1995 },
//   { label: "The Silence of the Lambs", year: 1991 },
//   { label: "It's a Wonderful Life", year: 1946 },
//   { label: "Life Is Beautiful", year: 1997 },
//   { label: "The Usual Suspects", year: 1995 },
//   { label: "Léon: The Professional", year: 1994 },
//   { label: "Spirited Away", year: 2001 },
//   { label: "Saving Private Ryan", year: 1998 },
//   { label: "Once Upon a Time in the West", year: 1968 },
//   { label: "American History X", year: 1998 },
//   { label: "Interstellar", year: 2014 },
//   { label: "Casablanca", year: 1942 },
//   { label: "City Lights", year: 1931 },
//   { label: "Psycho", year: 1960 },
//   { label: "The Green Mile", year: 1999 },
//   { label: "The Intouchables", year: 2011 },
//   { label: "Modern Times", year: 1936 },
//   { label: "Raiders of the Lost Ark", year: 1981 },
//   { label: "Rear Window", year: 1954 },
//   { label: "The Pianist", year: 2002 },
//   { label: "The Departed", year: 2006 },
//   { label: "Terminator 2: Judgment Day", year: 1991 },
//   { label: "Back to the Future", year: 1985 },
//   { label: "Whiplash", year: 2014 },
//   { label: "Gladiator", year: 2000 },
//   { label: "Memento", year: 2000 },
//   { label: "The Prestige", year: 2006 },
//   { label: "The Lion King", year: 1994 },
//   { label: "Apocalypse Now", year: 1979 },
//   { label: "Alien", year: 1979 },
//   { label: "Sunset Boulevard", year: 1950 },
//   {
//     label:
//       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
//     year: 1964,
//   },
//   { label: "The Great Dictator", year: 1940 },
//   { label: "Cinema Paradiso", year: 1988 },
//   { label: "The Lives of Others", year: 2006 },
//   { label: "Grave of the Fireflies", year: 1988 },
//   { label: "Paths of Glory", year: 1957 },
//   { label: "Django Unchained", year: 2012 },
//   { label: "The Shining", year: 1980 },
//   { label: "WALL·E", year: 2008 },
//   { label: "American Beauty", year: 1999 },
//   { label: "The Dark Knight Rises", year: 2012 },
//   { label: "Princess Mononoke", year: 1997 },
//   { label: "Aliens", year: 1986 },
//   { label: "Oldboy", year: 2003 },
//   { label: "Once Upon a Time in America", year: 1984 },
//   { label: "Witness for the Prosecution", year: 1957 },
//   { label: "Das Boot", year: 1981 },
//   { label: "Citizen Kane", year: 1941 },
//   { label: "North by Northwest", year: 1959 },
//   { label: "Vertigo", year: 1958 },
//   {
//     label: "Star Wars: Episode VI - Return of the Jedi",
//     year: 1983,
//   },
//   { label: "Reservoir Dogs", year: 1992 },
//   { label: "Braveheart", year: 1995 },
//   { label: "M", year: 1931 },
//   { label: "Requiem for a Dream", year: 2000 },
//   { label: "Amélie", year: 2001 },
//   { label: "A Clockwork Orange", year: 1971 },
//   { label: "Like Stars on Earth", year: 2007 },
//   { label: "Taxi Driver", year: 1976 },
//   { label: "Lawrence of Arabia", year: 1962 },
//   { label: "Double Indemnity", year: 1944 },
//   {
//     label: "Eternal Sunshine of the Spotless Mind",
//     year: 2004,
//   },
//   { label: "Amadeus", year: 1984 },
//   { label: "To Kill a Mockingbird", year: 1962 },
//   { label: "Toy Story 3", year: 2010 },
//   { label: "Logan", year: 2017 },
//   { label: "Full Metal Jacket", year: 1987 },
//   { label: "Dangal", year: 2016 },
//   { label: "The Sting", year: 1973 },
//   { label: "2001: A Space Odyssey", year: 1968 },
//   { label: "Singin' in the Rain", year: 1952 },
//   { label: "Toy Story", year: 1995 },
//   { label: "Bicycle Thieves", year: 1948 },
//   { label: "The Kid", year: 1921 },
//   { label: "Inglourious Basterds", year: 2009 },
//   { label: "Snatch", year: 2000 },
//   { label: "3 Idiots", year: 2009 },
//   { label: "Monty Python and the Holy Grail", year: 1975 },
// ];
