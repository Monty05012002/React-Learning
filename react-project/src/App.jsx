// import ProfileCard from './ProfileCard';

// // function App() {
// //   return (
// //     <div>
// //       <h1>Meet Our Members</h1>

// //       <ProfileCard
// //         name="Ankit Mohanty"
// //         age={26}
// //         country="India"
// //         imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
// //       />

// //       <ProfileCard
// //         name="Jane Doe"
// //         age={30}
// //         country="USA"
// //         imageUrl="https://randomuser.me/api/portraits/women/65.jpg"
// //       />
// //     </div>
// //   );
// // }


// //Array use-case

// const members = [
//   {
//     name: 'Ankit Mohanty',
//     age: 26,
//     country: 'India',
//     imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
//   },
//   {
//     name: 'Jane Doe',
//     age: 30,
//     country: 'USA',
//     imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
//   {
//     name: 'Ali Khan',
//     age: 28,
//     country: 'Pakistan',
//     imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Meet Our Members</h1>

//       <div className="card-container">
//         {members.map((member, index) => (
//           <ProfileCard
//             key={index}
//             name={member.name}
//             age={member.age}
//             country={member.country}
//             imageUrl={member.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // export default App;
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   // count = current state value
//   // setCount = function to update state

//   const increase = () => {
//     setCount(count + 1); // updating state
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increase}>Increment</button>
//       <button onClick={decrease}>Decrement</button>
//     </div>
//   );
// }

// export default App;


// import CounterButton from './CounterButton';

// function App() {
//   return (
//     <div>
//       <h1>React Event Handling Example</h1>
//       <CounterButton />
//     </div>
//   );
// }

// export default App;

//import NameGreeting from './NameGreeting';
//import MultiInputForm from "./MultiInputForm";
//import SimpleForm from "./SimpleForm";
// import ConditionalDemo from "./ConditionalDemo";
// function App() {
//   return (
//     <div>
//       <h1>React Input Event Example</h1>
//       {/* <NameGreeting /> */}
//       {/* <MultiInputForm/> */}
//       {/* <SimpleForm/> */}
//       <ConditionalDemo/>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect to fetch users
//   useEffect(() => {
//     console.log("Fetching user data...");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>User List</h2>
//       {loading ? (
//         <p>⏳ Loading users...</p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {users.map((user) => (
//             <li
//               key={user.id}
//               style={{
//                 marginBottom: "10px",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//               }}
//             >
//               <strong>{user.name}</strong> – {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;

//Error Handling Code
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // NEW

//   useEffect(() => {
//     console.log("Fetching user data...");

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch user data");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>User List</h2>

//       {loading && <p>⏳ Loading users...</p>}

//       {error && <p style={{ color: "red" }}>❌ {error}</p>}

//       {!loading && !error && (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {users.map((user) => (
//             <li
//               key={user.id}
//               style={{
//                 marginBottom: "10px",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//               }}
//             >
//               <strong>{user.name}</strong> – {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;

//import SearchUsers from "./SearchUsers";
// import FocusInput from "./FocusInput ";
// import RenderTracker from "./RenderTracker";
// function App(){
//   return(<div>
//   <RenderTracker/>
//   </div>)
// }
// export default App;

// import UserContext from "./UserContext";
// import Profile from "./Profile";

// function App() {
//   const user = { name: "Monty", email: "monty@example.com" };

//   return (
//     // 2. Wrap component tree in provider
//     <UserContext.Provider value={user}>
//       <div className="app">
//         <h1>Welcome to Context Demo</h1>
//         <Profile />
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;


// import { useState, useMemo } from "react";

// function slowDouble(num) {
//   console.log("⏳ Slow computation running...");
//   for (let i = 0; i < 1e9; i++) {} // simulate delay
//   return num * 2;
// }

// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [text, setText] = useState("");

//   // useMemo caches the result unless `number` changes
//   const doubled = useMemo(() => slowDouble(number), [number]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🚀 useMemo Demo</h2>

//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//         style={{ marginBottom: "10px" }}
//       />

//       <p>✅ Doubled (slow function): {doubled}</p>

//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />

//       <p>💬 You typed: {text}</p>
//     </div>
//   );
// }

// import { useState, useCallback } from "react";
// import Child from "./Child";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // ✅ useCallback returns the same function unless dependencies change
//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🔁 useCallback Demo</h2>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>

//       <input
//         type="text"
//         placeholder="Type here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ marginTop: "10px", padding: "6px" }}
//       />

//       <Child onIncrement={increment} />
//     </div>
//   );
// }
// import { useState, createContext, useContext } from 'react';

// // 1. Create Context
// const ThemeContext = createContext();

// function Header() {
//   return (
//     <header>
//       <h2>My App</h2>
//       <ThemeToggle />
//     </header>
//   );
// }

// // 2. A child that uses context
// function ThemeToggle() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       Current Theme: {theme.toUpperCase()}
//     </button>
//   );
// }

// // 3. Provide Context from parent
// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={`app ${theme}`}>
//         <Header />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;


// import { useReducer } from 'react';

// // 1. Initial state
// const initialState = { count: 0 };

// // 2. Reducer function
// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// function App() {
//   // 3. Hook setup
//   const [state, dispatch] = useReducer(counterReducer, initialState);

//   return (
//     <div style={{ textAlign: 'center', padding: '2rem' }}>
//       <h2>Count: {state.count}</h2>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕ Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖ Decrement</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>🔁 Reset</button>
//     </div>
//   );
// }

// export default App;


// App.jsx
// import { Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>🏠 Home Page</h2>;
// }

// function About() {
//   return <h2>ℹ️ About Page</h2>;
// }

// function Contact() {
//   return <h2>📞 Contact Page</h2>;
// }

// function App() {
//   return (
//     <div>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
//         <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// App.jsx
// import { Routes, Route, useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   function goToAbout() {
//     navigate("/about"); // navigates to About page
//   }

//   return (
//     <div>
//       <h2>🏠 Home Page</h2>
//       <button onClick={goToAbout}>Go to About Page</button>
//     </div>
//   );
// }

// function About() {
//   return <h2>ℹ️ About Page</h2>;
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// App.jsx
// import { Routes, Route, useParams, Link } from "react-router-dom";

// function UserProfile() {
//   const { id } = useParams(); // Get the :id from the URL
//   return <h2>👤 User Profile for ID: {id}</h2>;
// }

// function Home() {
//   return (
//     <div>
//       <h2>🏠 Home Page</h2>
//       <Link to="/user/1">Go to User 1</Link>
//       <br />
//       <Link to="/user/42">Go to User 42</Link>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user/:id" element={<UserProfile />} />
//     </Routes>
//   );
// }

// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import UserProfile from "./UserProfile";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </div>
//   );
// }

// import React, { createContext, useContext, useState } from "react";

// // 1️⃣ Create context
// const UserContext = createContext();

// function UserProvider({ children }) {
//   const [user, setUser] = useState("Monty");

//   return (
//     // 2️⃣ Provide the value to all children
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // 3️⃣ A child component that consumes context
// function UserProfile() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       <h2>Welcome, {user}!</h2>
//       <button onClick={() => setUser("New User")}>Change Name</button>
//     </div>
//   );
// }

// // Root component
// export default function App() {
//   return (
//     <UserProvider>
//       <h1>React Context API Example</h1>
//       <UserProfile />
//     </UserProvider>
//   );
// }

// import React, { createContext, useContext, useState } from "react";

// // 1️⃣ Create the AuthContext
// const AuthContext = createContext();

// // 2️⃣ Create a provider component
// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (username) => {
//     setUser({ name: username });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // 3️⃣ Navbar component that uses context
// function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   return (
//     <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
//       {user ? (
//         <>
//           <span>👋 Hello, {user.name}</span>
//           <button onClick={logout} style={{ marginLeft: "10px" }}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <span>Please log in</span>
//       )}
//     </nav>
//   );
// }

// // 4️⃣ Profile component that uses context
// function Profile() {
//   const { user, login } = useContext(AuthContext);

//   if (!user) {
//     return (
//       <div>
//         <h2>You are not logged in</h2>
//         <button onClick={() => login("Monty")}>Login as Monty</button>
//       </div>
//     );
//   }

//   return <h2>Welcome to your profile, {user.name}!</h2>;
// }

// // 5️⃣ Main App
// export default function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <div style={{ padding: "20px" }}>
//         <Profile />
//       </div>
//     </AuthProvider>
//   );
// }

// import React, { useState } from "react";
// import Modal from "./Modal";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>React Portals Example</h1>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>

//       {isOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <h2>This is a Portal Modal</h2>
//           <p>It renders outside the root div!</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import BuggyComponent from "./BuggyComponent";

// function App() {
//   return (
//     <div>
//       <h1>React Error Boundary Example</h1>

//       <ErrorBoundary>
//         <BuggyComponent /> {/* This will crash but won't break the whole app */}
//       </ErrorBoundary>

//       <p>✅ This text will still show because of Error Boundary.</p>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import BuggyButton from "./BuggyButton";

// function App() {
//   return (
//     <div>
//       <h1>ErrorBoundary with componentDidCatch Example</h1>

//       <ErrorBoundary>
//         <BuggyButton />
//       </ErrorBoundary>

//       <p>✅ Rest of the app still works fine.</p>
//     </div>
//   );
// }

// export default App;

// App.jsx
// import React from "react";
// import MyButton from "./MyButton";
// import withLogger from "./withLogger";

// const MyButtonWithLogger = withLogger(MyButton);

// function App() {
//   return (
//     <div>
//       <MyButtonWithLogger label="Click Me" />
//     </div>
//   );
// }

// export default App;
// import useFetch from "./useFetch";

// function App() {
//   const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import React, { Suspense } from 'react';

// // Lazy load the component
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       {/* Suspense shows fallback UI while lazy component loads */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { fetchUsers } from "./api/users";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadUsers() {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { fetchUsers } from "./api/users";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadUsers() {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Users List (Axios)</h1>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { fetchUsers } from "./api/users";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Create a cancel token for Axios
//     const source = axios.CancelToken.source();

//     async function loadUsers() {
//       try {
//         const data = await fetchUsers(source.token);
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadUsers();

//     // Cleanup: cancel request if component unmounts
//     return () => {
//       source.cancel("Component unmounted, request canceled.");
//     };
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Users List (Axios + Cancel Token)</h1>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './counterSlice';

// export default function App() {
//   const count = useSelector((state) => state.counter.value); // read state
//   const dispatch = useDispatch(); // dispatch actions

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>+ Increment</button>
//       <button onClick={() => dispatch(decrement())}>- Decrement</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

export default function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // fetch users on mount
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
