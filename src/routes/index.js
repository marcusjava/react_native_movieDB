import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Movies from "../pages/Movies";
import StackRoutes from "./stackRoutes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#090A0E",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#E72749",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        options={{
          title: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="HomeDrawer"
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Movies"
        options={{
          title: "Meus filmes",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={Movies}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
