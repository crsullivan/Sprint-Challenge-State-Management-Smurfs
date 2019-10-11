1. What problem does the context API help solve?

Prop drilling can get very messy and confusing, context API allows data to be stored on a context object instead of props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: send data from the app to the store when dispatched, this data contains Payloads.
Reducers: decide how state will respond to the data sent to the store from actions.
store: holds everything together including state, allows state updates.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application: global state (redux, context api) is great for large, complex applications with many components, prop drilling gets complicated fast.
Component: local state (props) is nice and simple for use in small applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that watches for actions that are functions, and when it sees one, it calls that function. it allows our action creators to simply call an action instead of triggering a dispatch.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Personally, I like redux. I'm not sure why, it just seems easier to understand than context API.