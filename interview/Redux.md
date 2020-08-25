It's been said that "Redux is just a [dumb] event emitter".   
Redux, on the other hand, only has a single event type: "some action was dispatched".  
1. Create a Redux store  
2. Subscribe to updates   
3. Inside the subscription callback:  
4. Get the current store state  
5. Extract the data needed by this piece of UI  
6. Update the UI with the data  
7. If necessary, render the UI with initial state  
8. Respond to UI inputs by dispatching Redux actions  
