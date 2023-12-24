import { IconCart2 } from "../../assets";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../utils";

export const dummyMenu = [
    {
        id: 1,
        name: 'Edit Profile',
        image: <Ionicons name="person-outline" size={24} color={colors.primary} />,
        pages: 'EditProfile',
    },
    {
        id: 2,
        name: 'FAQ',
        image: <Ionicons name="information-circle-outline" size={24} color={colors.primary} />,
        pages: 'EditProfile',
    },
    {
        id: 3,
        name: 'History',
        image: <Ionicons name="bookmark-outline" size={24} color={colors.primary} />,
        pages: 'EditProfile',
    },
    {
        id: 4,
        name: 'Sign Out',
        image: <Ionicons name="log-out-outline" size={24} color={colors.primary} />,
        pages: 'EditProfile',
    },
]