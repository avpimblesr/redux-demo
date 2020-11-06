Three Core Concepts of Redux

A store that holds the state of your application

An action that describes the changes in the state of the application

A reducer which actually carries out the state transition depending on the action

THE CAKE SHOP

Shop - Store - Holds the state of your application
Intention to BUY_CAKE - Action - Describes what happens
Shopkeeper - Reducer - Ties the store and actions together

---

A <store> that holds the state of your application
An <action> that describes the changes in the state of the application.
A <reducer> which actually carries out the state transition depending on the action. 

THE THREE PRINCIPLES OF REDUX

* Our application is a JavaScript application
* The state of the application is maintained separately in the Redux Store
* The application is subscribed to the Redux Store

  1 - The application cannot directly update the state - it must dispatch an Action
  2 - The Action is handled by the Reducer which updates the state of the Store
  3 - As soon as the state is updated it is passed on to the application because
      the application is subscribed to the Store
# redux-demo
