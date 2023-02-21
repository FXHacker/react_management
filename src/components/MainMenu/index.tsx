import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: "栏目1",
        key: "/page1",
        icon: <PieChartOutlined />
    }, {
        label: "栏目2",
        key: "/page2",
        icon: <DesktopOutlined />
    }, {
        label: "栏目3",
        key: "page3",
        icon: <UserOutlined />,
        children: [
            {
                label: "Tom",
                key: "/page3/page301",
            }, {
                label: "Bill",
                key: "/page3/page302",
            }, {
                label: "Alex",
                key: "/page3/page303",
            }
        ]
    }, {
        label: "栏目4",
        key: "page4",
        icon: <TeamOutlined />,
        children: [
            {
                label: "Team1",
                key: "/page4/401",
            }, {
                label: "Team2",
                key: "/page4/402",
            }
        ]
    }, {
        label: "栏目5",
        key: "/page5",
        icon: <FileOutlined />
    }
]

const rootSubmenuKeys = ['page3', 'page4'];

const MainMenu: React.FC = () => {
    const currentRoute = useLocation()
    const navigateto = useNavigate()
    const menuClick = (e: { key: string }) => {
        navigateto(e.key)
    }
    let firstOpenKey: string = ""

    function findkey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findkey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const onOpenChange = (keys: string[]) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items} onClick={menuClick}
            openKeys={openKeys}
            onOpenChange={onOpenChange} />
    )
}
export default MainMenu