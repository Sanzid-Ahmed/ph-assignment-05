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

## 