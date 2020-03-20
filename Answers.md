1. What problem does the context API help solve?
    `It reduces the amount of prop drilling necessary`
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' 
in a redux application?
    `actions are a set of functions which can be accessed as props, from anywhere. reducers are a method of easily handling a variety of different use cases being`
    `dispatched. and the store is a way to manage state globally, almost like having a front-end database`
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    `Application state is global, component state is within the scope of a specific component. You would use component state for data that will only ever be accessed`
    `by a specific component, (or possibly context if you have a component with a set of a few sub components sharing the same data), and application state when`
    `you have data that may be accessed by many different components`
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `It allows us to place functions inside our actions to execute before dispatching`
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    `Redux because it offers the easiest solution, allowing state to be global in scope`