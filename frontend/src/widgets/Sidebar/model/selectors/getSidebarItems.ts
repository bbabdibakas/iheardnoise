import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/SidebarItemType";
import { routePath } from "app/providers/AppRouter/lib/routeConfig";
import MainPageActiveIcon from 'shared/assets/icons/MainIconActive.svg'
import MainPageIcon from 'shared/assets/icons/MainIcon.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfileIconActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfileIcon.svg'
import { getUserData } from "entities/User";

export const getSidebarItems = createSelector(
    getUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: routePath.main,
                activeIcon: MainPageActiveIcon,
                icon: MainPageIcon,
                label: 'Main',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: routePath.profile,
                    activeIcon: ProfilePageActiveIcon,
                    icon: ProfilePageIcon,
                    label: 'Profile',
                },
            );
        }

        return sidebarItemsList;
    },
);