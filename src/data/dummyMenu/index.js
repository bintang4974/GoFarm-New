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
        pages: 'FAQ',
    },
    {
        id: 3,
        name: 'History',
        image: <Ionicons name="bookmark-outline" size={24} color={colors.primary} />,
        pages: 'History',
    }
]