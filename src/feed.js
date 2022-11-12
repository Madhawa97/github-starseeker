import React from "react";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";

const Feed = () => {
    const ListViewStatus = false;

    return (
        <Box maxWidth='1200px' mx='auto' >
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Filters 
                    onViewChangeCallback = { (viewType) => {
                        console.log("from Feed"+ viewType)
                    }}
                />
            </Flex>

            <SimpleGrid columns={3} spacing='20px'>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
                <Repo isListViewSet={ListViewStatus}/>
            </SimpleGrid>

            <Flex alignItems='center' justifyContent='center' my='20px'>
                <Button colorScheme='blue' variant='solid'>Load Next Group</Button>
            </Flex>
        </Box>
    );
}

export { Feed };
