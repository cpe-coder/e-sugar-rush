import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					headerShadowVisible: false,
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#ff5757",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopColor: "#232533",
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name="control"
					options={{
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name="stat"
					options={{
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name="setting"
					options={{
						headerShown: false,
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
