### Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- Ans:
1. getElementById is used to use any specific unique id from the html file to the js file. 
2. getElementByName is used to use multiple element of same class name from the html file to js file.
3. querySelector is used  to get the first element that matches the css selector.
4. querySelectorAll is used to get all the elements that matches a css selector.

### Q2. How do you create and insert a new element into the DOM?
- Ans:
To create we use document.createElement()
To insert we use appendChild()

### Q3. What is Event Bubbling and how does it work?
- Ans.
it targets an element while starting and at the end it climbs up to the dom tree.

### Q4. What is Event Delegation in JavaScript? Why is it useful?
- Ans. 
to reduce multiple event listener, we attach the event listener to the parent and using bubbling we can use the child. this is event delegation.

### Q5. What is the difference between preventDefault() and stopPropagation() methods?
- Ans.
preventDefault() stops default action where as the stopPropagation() stops the bubbling.