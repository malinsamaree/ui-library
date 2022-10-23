import * as React from 'react';
import {SideNavWrapper, UnorderedList, H4, List, RouterLink} from "./style";

const SideNav = () => {
    return (
        <SideNavWrapper>
            <nav>
                <H4>Atoms</H4>
                    <UnorderedList>
                        <List><RouterLink to="/chip">chip</RouterLink></List>
                        <List><RouterLink to="/spinner">spinner</RouterLink></List>
                    </UnorderedList>
                <H4>Molecules</H4>
                    <UnorderedList>
                        <List><RouterLink to="/chip">chip</RouterLink></List>
                        <List><RouterLink to="/spinner">spinner</RouterLink></List>
                    </UnorderedList>
            </nav>
        </SideNavWrapper>
    );
};

export default SideNav;