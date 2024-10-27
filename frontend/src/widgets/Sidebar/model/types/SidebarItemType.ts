export interface SidebarItemType {
    path: string
    activeIcon: React.FC<React.SVGProps<SVGSVGElement>>
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    label: string
}