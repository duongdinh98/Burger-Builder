import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact={true}>
        Burger Builder
      </NavigationItem>

      {props.isAuthenticated ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {props.isAuthenticated ? (
        <NavigationItem link="/logout">Log out</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
