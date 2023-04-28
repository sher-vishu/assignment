import { FoodTypes, FoodMenuItem, foods } from '@modules/ZenportEats/data/food-menu';
import { TabPaneImageStyle, FoodSelectionContainer, TabsStyle } from './styles';
import { Tabs, Typography } from 'antd';
import FoodSelection from '@components/FoodSelection';
import { useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const { TabPane } = Tabs;

const images = {
  Appetizer: '/icons/appetizer.png',
  Entree: '/icons/entree.png',
  Maki: '/icons/maki.png',
  Nigiri: '/icons/nigiri.png',
};

// assignment: On the second step of the form, we want to filter food items by type

const FoodTypeTabs = () => {

  const [selectedTab, setSelectedTab] = useState<FoodTypes | null>(null);

  
  const handleTabClick = (key: string) => {
    setSelectedTab(selectedTab === key ? null : key as FoodTypes);
  };
  const {
    handleFoodItemAdd,
  } = useZenportEats();

  console.log(selectedTab);
  if (selectedTab != null){
    return (
      <>
        <TabsStyle
          tabBarGutter={25}
          onTabClick={handleTabClick}
          $isDisabled={!selectedTab}
        >
          {Object.keys(foods).map((id) => (
            <TabPane
              tab={
                <TabPaneImageStyle>
                  <Image
                    src={images[id as FoodTypes]}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <Typography>{id}</Typography>
                </TabPaneImageStyle>
              }
              key={id}
            />
          ))}
        </TabsStyle>
          <FoodSelectionContainer>
            <FoodSelection
                key={selectedTab}
                foodType={selectedTab}
                foodItems={foods[selectedTab as FoodTypes]}
                onFoodItemAdd={handleFoodItemAdd}
            />
          </FoodSelectionContainer>
      </>
    );
  }
  else{
    return (
      <>
        <TabsStyle
          tabBarGutter={25}
          onTabClick={handleTabClick}
          $isDisabled={!selectedTab}
        >
          {Object.keys(foods).map((id) => (
            <TabPane
              tab={
                <TabPaneImageStyle>
                  <Image
                    src={images[id as FoodTypes]}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <Typography>{id}</Typography>
                </TabPaneImageStyle>
              }
              key={id}
            />
          ))}
        </TabsStyle>
          <FoodSelectionContainer>
          {Object.keys(foods).map((foodType) => {
            return (
              <FoodSelection
                key={foodType}
                foodType={foodType as FoodTypes}
                foodItems={foods[foodType as FoodTypes]}
                onFoodItemAdd={handleFoodItemAdd}
              />
            );})}
        </FoodSelectionContainer>
      </>
    );
    
  }
  };

export default FoodTypeTabs;