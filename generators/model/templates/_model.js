module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: '<%= name %>',
  state: {
    /* initial values of state inside the model */
    // counter: 1
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    // add: (action, state) => ({ counter: state.counter + 1})
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
  },
  subscriptions: {
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
  }
}
