# Question answer: 
## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById = selsect one element by element's id.
- getElementsByClassName = select all the same class name maintened spacific elements. 
- querySelector = select element like CSS and selest the first element from all same class named elements. 
- querySelectorAll = select elements like CSS and select all the elements of same class named elements. 

## How do you create and insert a new element into the DOM?
- Use document.createElement() to create an element.
-- Example: const newDiv = document.createElement("div");
- By using parentDiv.appendChild(newDiv) we insert an element.
-- Example:     const container = document.getElementById("container");
                container.appendChild(newDiv);

## What is Event Bubbling and how does it work?
- Event Bubbling is a type of event propagation in the DOM where an event starts at the deepest target element and then bubbles up to its parent elements, all the way to the document root. (used google for definition).


## What is Event Delegation in JavaScript? Why is it useful?
- it is a way to attach a single event listener to a parent element instead of multiple listeners to individual child elements.
- Cleaner Code
- nstead of attaching many listeners attach one listener to the parent. 
- Works for Dynamic Elements. 
(take help from google). 

## What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() = Stops the default behavior of an element. Like = form reload. 
- stopPropagation() = Stops the event from bubbling. 