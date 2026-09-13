# 🚀 Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category and select technologies to create their own personalized stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React-Toastify
* JSON



## ✨ Features

* **Build Your Stack** — Add up to 6 technologies to create your personalized development stack.
* **One Technology per Category** — Select only one technology from each category to build your ideal stack.
* **Toast Notifications** — Get instant notifications when technologies are added, removed, duplicated, or when the stack is cleared.

## 📱 Responsive Design

The application is responsive and works across mobile, tablet, and desktop devices.

## 📂 Data

Technology information is loaded dynamically from a local JSON file.

---

© 2026 Dev Stack. All rights reserved.



## Question and Answere:

1) What is JSX, and why is it used in React?

Answer: JSX is a syntax extension of JavaScript. We use it for writing HTML type structure in JavaScript. Also it used for creating and readable  UI in React.

2) What is the difference between props and state?

Answer: Difference between props and state:
  a)Props send data from parent to child, State use for managing on it's component data.
  b) Generally child cannot change props but state can change.
  c) Props use for passing data and State use for store dynamic data

3) What does the useState hook do, and where did you use it in this project?

Answer: In React component useState use for storing data or state and update that. In my project please look Technologies.tsx. here I an use it. here I use it.

const [selectedTechnologies, setSelectedTechnologies] =
  useState<TechCard[]>([]);

setSelectedTechnologies([...selectedTechnologies, technology]);


4) What does the useEffect hook do, and why did you need it to load the JSON data?

Answer:  useEffect hook use for fetch API/JSON data. But In my project I used async function with fetch() and Suspense for handle data. Example: 
const TechnologiesPromise = async (): Promise<TechCard[]> => {
  const res = await fetch("/DevStack/data.json");
  const data = await res.json();
  return data;
};

5) Why does every item in a .map() list need a unique key prop?

Answer: key is used for identify every single data in list. Example:
{technologies.map((technology) => (
              <Technology
                key={technology.id}
                technology={technology}
		...
              />
            ))}

6) What is conditional rendering? Show one place you used it (example: the empty stack message).

Answer: Conditional rendering means showing different UI according to condition. 
 Example: {selectedTechnologies.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

7) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer: In React we use props for passing data from parent to child. but child cannot pass data to parent directly. child use a parent's function for pass data.

Example: Parent to child: technology, isInStack, onAddToStack
Child to Parent: onAddToStack(technology)