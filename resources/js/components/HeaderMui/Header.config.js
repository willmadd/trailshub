import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";

export const pages = [
    { name: "Home", url: "/", Icon: HomeIcon },
    { name: "Trails", url: "/trails", Icon: PedalBikeIcon },
    { name: "Blog", url: "/blog", Icon: ArticleIcon },
    { name: "Create a Trail", url: "/", Icon: CreateIcon },
];

export const accountToolTip = "Open settings";

export const settings = ["Profile", "Account", "Dashboard", "Logout"];
