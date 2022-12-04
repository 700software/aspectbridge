import { useEffect, useState } from "react"
import Andrew, { AndrewNav } from "../../../pages/josh/clients/andrew/andrew";
import Ashmore, { AshmoreNav } from "../../../pages/josh/clients/ashmore/ashmore"
import Bill, { BillNav } from "../../../pages/josh/clients/bill/bill"
import Blake, { BlakeNav } from "../../../pages/josh/clients/blake/blake";
import { ClientNA, Dashboard, DashNav } from "../../../pages/josh/clients/clientlist";
import Graveyards, { GraveyardsNav } from "../../../pages/josh/clients/graveyards/graveyards";

/**
 * This function provides the data directory JSX.Element that should be loaded according to the url
 * 
 * 
 * @param path 
 * @returns clinfo = { info: <ClientInfo/>, nav: <ClientNav/>, subnav: <ClientNavAlt/> }
 */
export default function getClientInfo(path){
    let clinfo = { info: <></>, nav: <></>, subnav: <></> };
    let info = <></>
    let nav = <></>
    let subnav = <></>
        if(path){
            switch(path.dir){
                case 'dashboard': {
                    info= <Dashboard />
                    nav= <DashNav/>
                    subnav= <DashNav/>
                }
                break;
                case 'andrew': { 
                    info = <Andrew />
                    nav = <AndrewNav />
                    switch(path.sub){
                        case 'yards': {info = <>Yards</>; nav = <AndrewNav />}
                        break;
                        case 'trimmings': {info = <>Trimmings</>; nav = <AndrewNav />}
                        break;
                        case 'hardees': {info = <>Hardees</>; nav = <AndrewNav />}
                        default: {info = <Andrew />, <AndrewNav />}
                        break;
                    }
                } break;
                case 'ashmore': { 
                    info = <Ashmore />
                    nav = <AshmoreNav />
                    switch(path.sub){
                        case 'yards': {info = <>Yards</>; nav = <AshmoreNav/>}
                        break;
                        case 'trimmings': {info = <>Trimmings</>; nav = <AshmoreNav/>}
                        break;
                        case 'hardees': {info = <>Hardees</>; nav = <AshmoreNav/>}
                        break;
                        default: {info = <Ashmore />, <AshmoreNav />}
                        break;
                    }
                } break;
                case 'bill': { 
                    info = <Bill />
                    nav = <BillNav />
                    switch(path.sub){
                        case 'yards': {info = <>Yards</>; nav = <BillNav/>}
                        break;
                        case 'trimmings': {info = <>Trimmings</>; nav = <BillNav/>}
                        break;
                        case 'hardees': {info = <>Hardees</>; nav = <BillNav/>}
                        break;
                        default: {info = <Bill />, <BillNav />}
                        break;
                    }
                } break;
                case 'bill': { 
                    info = <Blake />
                    nav = <BlakeNav />
                    switch(path.sub){
                        case 'yards': {info = <>Yards</>; nav = <BlakeNav/>}
                        break;
                        case 'trimmings': {info = <>Trimmings</>; nav = <BlakeNav/>}
                        break;
                        case 'hardees': {info = <>Hardees</>; nav = <BlakeNav/>}
                        break;
                        default: {info = <Blake />, <BlakeNav />}
                        break;
                    }
                } break;
                case 'graveyards': { 
                    info = <Graveyards />
                    nav = <GraveyardsNav />
                    switch(path.sub){
                        case 'trenton': {info = <>trenton</>; nav = <GraveyardsNav/>; nav = <GraveyardsNav/>}
                        break;
                        case 'ringold': {info = <>ringold</>; nav = <GraveyardsNav/>; nav = <GraveyardsNav/>}
                        break;
                        case 'calhoon': {info = <>calhoon</>; nav = <GraveyardsNav/>; nav = <GraveyardsNav/>}
                        break;
                        default: {info = <Graveyards />, <GraveyardsNav />}
                        break;
                    }
                } break;
                default: {
                    info = <ClientNA/>
                    nav = <DashNav/>
                    subnav = <DashNav/>
                } break;
            } clinfo = { info: info, nav: nav, subnav: subnav }
        }
    return clinfo;
}