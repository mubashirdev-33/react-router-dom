# 🚀 React Router DOM Practice

A complete React Router DOM practice project built with **React + Vite** to understand modern client-side routing concepts through practical examples.

## 📌 About This Project

This project is created for learning and practicing **React Router DOM**.

It covers the most important routing concepts used in React applications, including:

* SPA (Single Page Application)
* BrowserRouter
* Routes
* Route
* Link
* Nested Routing
* Outlet
* Dynamic Routing
* Dynamic Parameters
* useParams()
* Protected Routing
* Navigate
* useNavigate()
* Dynamic + Nested Routing
* 404 Not Found Route

---

## 🛠️ Technologies Used

* React
* React Router DOM
* Vite
* JavaScript
* CSS
* LocalStorage

---

## 📂 Project Structure

```text
react-router-practice/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProductReviews.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 📚 React Router DOM Concepts

## 1. SPA — Single Page Application

SPA means **Single Page Application**.

In a traditional website, navigating to another page usually causes the browser to load another HTML document.

In React SPA:

```text
User clicks link
       ↓
URL changes
       ↓
React Router detects the URL
       ↓
Required component renders
       ↓
Full page reload is avoided
```

This makes navigation faster and smoother.

---

# 2. BrowserRouter

In `main.jsx`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

`BrowserRouter` enables routing functionality throughout the React application.

It allows components to use features such as:

```jsx
Routes
Route
Link
useParams
useNavigate
Navigate
Outlet
```

---

# 3. Routes

`Routes` is the container for all application routes.

Example:

```jsx
<Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

</Routes>
```

It checks the current URL and renders the matching route.

---

# 4. Route

A `Route` connects a URL path with a React component.

Example:

```jsx
<Route
  path="/login"
  element={<Login />}
/>
```

This means:

```text
/login
   ↓
Login Component
```

---

# 5. Link

React Router provides the `Link` component for navigation.

Example:

```jsx
<Link to="/products">
  Products
</Link>
```

Unlike a normal HTML anchor:

```html
<a href="/products">
```

`Link` allows React Router to handle navigation without a complete page reload.

---

# 6. Nested Routing

Nested routing means placing child routes inside a parent route.

Example:

```jsx
<Route
  path="/dashboard"
  element={<DashboardLayout />}
>

  <Route
    index
    element={<Dashboard />}
  />

  <Route
    path="profile"
    element={<Profile />}
  />

  <Route
    path="settings"
    element={<Settings />}
  />

</Route>
```

This creates:

```text
/dashboard
/dashboard/profile
/dashboard/settings
```

---

# 7. Outlet

`Outlet` is used inside the parent layout to display the currently matched child route.

Example:

```jsx
<DashboardLayout>

  <Outlet />

</DashboardLayout>
```

Conceptually:

```text
DashboardLayout
       │
       └── Outlet
             │
             ├── Dashboard
             ├── Profile
             └── Settings
```

The layout stays the same while the content inside `<Outlet />` changes.

---

# 8. Dynamic Routing

Dynamic routing allows part of the URL to change.

Example:

```jsx
<Route
  path="/products/:id"
  element={<ProductDetails />}
/>
```

Here:

```text
:id
```

is a dynamic parameter.

These URLs can all match:

```text
/products/1
/products/2
/products/10
/products/100
```

---

# 9. useParams()

`useParams()` is used to receive dynamic values from the URL.

Example:

```jsx
const params = useParams();

console.log(params.id);
```

If the URL is:

```text
/products/25
```

then:

```jsx
params.id
```

will contain:

```text
25
```

---

# 10. Dynamic + Nested Routing

This project also demonstrates dynamic routing combined with a nested URL.

```jsx
<Route
  path="/products/:id/reviews"
  element={<ProductReviews />}
/>
```

Example:

```text
/products/10/reviews
```

Here:

```text
10
```

is the dynamic product ID.

Inside the component:

```jsx
const params = useParams();

console.log(params.id);
```

Result:

```text
10
```

---

# 11. Protected Routing

Protected routing is used when a page should only be accessible to authenticated users.

This project contains:

```jsx
<ProtectedRoute />
```

The route checks:

```jsx
localStorage.getItem("isLoggedIn");
```

If the user is not logged in:

```jsx
<Navigate
  to="/login"
  replace
/>
```

The user is redirected to the Login page.

If the user is logged in:

```jsx
return <Outlet />;
```

The protected page is displayed.

---

# 12. Navigate

`Navigate` is used to redirect a user to another route.

Example:

```jsx
<Navigate
  to="/login"
  replace
/>
```

In this project it is used for protected routes.

---

# 13. useNavigate()

`useNavigate()` allows navigation using JavaScript.

Example:

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

In the Login page:

```text
Login button
     ↓
localStorage
     ↓
navigate("/dashboard")
     ↓
Dashboard
```

---

# 🗺️ Available Routes

| Route                   | Purpose             |
| ----------------------- | ------------------- |
| `/`                     | Home                |
| `/login`                | Login               |
| `/signup`               | Signup              |
| `/products`             | Products            |
| `/products/:id`         | Product Details     |
| `/products/:id/reviews` | Product Reviews     |
| `/dashboard`            | Protected Dashboard |
| `/dashboard/profile`    | Protected Profile   |
| `/dashboard/settings`   | Protected Settings  |
| `*`                     | 404 Not Found       |

---

# 🔐 Protected Route Flow

```text
/dashboard
     ↓
ProtectedRoute
     ↓
Is user logged in?
   ↙       ↘
 NO         YES
 ↓           ↓
/login    Dashboard
```

To test the protected route:

1. Open `/dashboard`
2. If you're not logged in, you'll be redirected to `/login`
3. Click **Login**
4. You will be redirected to `/dashboard`
5. Click **Logout**
6. You will return to `/login`

---

# 📦 Installation

Clone or download this project and open the project folder in the terminal.

Install dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🧪 Practice URLs

Try these URLs manually in the browser:

```text
/
```

```text
/login
```

```text
/signup
```

```text
/products
```

```text
/products/1
```

```text
/products/10
```

```text
/products/10/reviews
```

```text
/dashboard
```

```text
/dashboard/profile
```

```text
/dashboard/settings
```

And finally try:

```text
/anything
```

You should see the **404 Not Found** page.

---

# 🎯 Learning Goals

After completing this project, you should understand how to:

* Create routes in React
* Navigate between pages
* Build nested routes
* Use layouts with `Outlet`
* Create dynamic routes
* Receive URL parameters
* Protect routes
* Redirect users
* Navigate programmatically
* Handle unknown routes

---

## 👨‍💻 Author

**Mubashir Khan**

React & Web Development Student

---

## ⭐ If You Find This Project Helpful

Use this project for practice and continue building your own React applications with routing.
