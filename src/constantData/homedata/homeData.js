import { FaPencilRuler } from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ConstructionIcon from "@mui/icons-material/Construction";
import PolicyIcon from "@mui/icons-material/Policy";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AssignmentReturnRoundedIcon from "@mui/icons-material/AssignmentReturnRounded";
export const DevSecOpsData = [
  {
    id: "FaPencilRuler1",
    heading: "Design with Security",
    content:
      "Finding and fixing bugs during design provides instant ROl as bugs found in production are 10X more expensive to fix",
    icon: (
      <FaPencilRuler className="text-[4.5rem] text-orange-cus-1 text-center" />
    ),
  },
  {
    id: "ArrowBackIosIcon2",
    heading: "Develop with Security",
    content:
      "Integrating security activities in the development phase allows you to ship secure code and protect user data",
    icon: (
      <div className="flex items-center">
        <ArrowBackIosIcon sx={{ fontSize: "4.5rem", color: "#F67A32" }} />
        <ArrowForwardIosIcon sx={{ fontSize: "4.5rem", color: "#F67A32" }} />
      </div>
    ),
  },
  {
    id: "CloudDoneIcon2",
    heading: "Operate with Securityi",
    content:
      "Security doesn't stop after, development. Operating with Security means continuous security testing ",
    icon: <CloudDoneIcon sx={{ fontSize: "5rem", color: "#F67A32" }} />,
  },
];

export const solutionData = [
  {
    id: "ConstructionIcon123",
    content: "Threat Model as Service",
    bracket: "TMaas",
    icon: <PolicyIcon sx={{ fontSize: "4rem", color: "#F67A32" }} />,
  },
  {
    id: "PolicyIcon123",
    content: "Pentest as Service",
    bracket: "PTaas",
    icon: <ConstructionIcon sx={{ fontSize: "4rem", color: "#F67A32" }} />,
  },
  {
    id: "AssessmentIcon123",
    content: "Application Security Posture Management",
    bracket: "ASPM",
    icon: <AssessmentIcon sx={{ fontSize: "4rem", color: "#F67A32" }} />,
  },
];

export const ourMissionData = [
  {
    id: "AssignmentReturnRoundedIcon543",
    icon: (
      <AssignmentReturnRoundedIcon
        sx={{ fontSize: "4.8rem", color: "#F67A32" }}
      />
    ),
    heading: "shift left",
    content: "Bring security to the table on day one to help build in security",
  },
  {
    id: "PsychologyIcon543",
    icon: <AllInclusiveIcon sx={{ fontSize: "4.8rem", color: "#F67A32" }} />,
    heading: "capability gap",
    content:
      "Most organizations cant get past the capability gap, we can help you.",
  },
  {
    id: "AllInclusiveIcon543",
    icon: <PsychologyIcon sx={{ fontSize: "4.8rem", color: "#F67A32" }} />,
    heading: "actionable intelligence",
    content:
      "Findings come with actionable data that allows for efficient remediation",
  },
];
