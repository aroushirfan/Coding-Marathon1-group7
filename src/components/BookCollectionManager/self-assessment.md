# Self-Assessment: BookCollectionManager.jsx
Aroush Irfan
## 1. Functionality
- **Does the component meet the requirements?**
<<<<<<< HEAD
<<<<<<< HEAD
  - [ ] Does it handle all the specified features (e.g., adding, removing, or updating books)?
  
  - [ ] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [ ] Are there any bugs or unexpected behaviors?
=======
=======
>>>>>>> a3325107b49a9853e55994f488b3cec994ae20a7
  - Does it handle all the specified features (e.g., adding, removing, or updating books)?  
  Yes, it handles adding and deleting and it has additional features to update an already added book and also to move the books up and down in the list.
  - Are edge cases handled (e.g., empty inputs, duplicate entries)?  
  Yes, it handles empty inputs and also duplicate entries.
  - Are there any bugs or unexpected behaviors?  
  Not really.
<<<<<<< HEAD
>>>>>>> b0511a6d7f9d1ef3a0fc0a8f36c698391d49f67a
=======
>>>>>>> a3325107b49a9853e55994f488b3cec994ae20a7

- **How well does the component integrate with other parts of the application?**
  - Are props and state managed appropriately?  
  Yes, `useState` has been used effectively and props were also passed.

## 2. Code Quality
- **Readability**
  - Is the code easy to understand for other developers?  
  I believe yes for developers it should be easy to follow.
  - Are variable and function names descriptive and meaningful?  
  Yes they are descriptive enough to understand.

- **Reusability**
  - Can the component or parts of it be reused in other parts of the application?  
  I think all the other components are quite similar and follow the similar logic so kind of can
  be reused wiht minor alterations.

- **Comments and Documentation**
  - Are there comments explaining complex logic?  
  Yes I have added a few comments.
  - Is there documentation for how to use the component?  
  Some kind of documentation at the top of the BookCollectionManager.jsx

## 3. Performance
- **Efficiency**
  - Are there any unnecessary re-renders or performance bottlenecks?    
  I think not.
  - Is the component optimized for large datasets (if applicable)?   
  No, not optimized for large datasets.

- **State Management**
  - Is state managed efficiently (e.g., minimal state, derived state)?
  Yes, I managed with minimal state.
  - Are hooks (e.g., `useState`, ) used correctly?  
  Yes hooks are being used correctly.

## 4. Overall Assessment
- **Strengths**
  - List the strengths of the component.  
    - The opportunity to update already added books and not adding duplicate books. 
    - Also, the user can reorder the books.

- **Areas for Improvement**
  - List areas where the component could be improved. 
    - I think it should check the the user doesn't type in negative numbers.
    - Ensure that the rating must not go above 5 and below 0.
    - I would like to replace the alert message to a feedback message especially when adding
    an already exisiting book.

- **Action Plan**
  - Outline specific steps to address the areas for improvement.
    - I think I would add some kind of if statement to check the numbers specifications
    and then set a message if they type in invalid values. Also, I would guide the user in the
    placeholder because error prevention is better than error handling.
    - maybe I would use `useState` here also and that can be used anywhere to show any kind of message.

## 5. Additional Notes
- It was fun and very similar to the homework video to do list app. That helped a lot😊.