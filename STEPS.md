1. Installed latest NPM
2. Initialized npm create vite@latest .
3. Deleted App.cs, and contents from public folder
4. Done this: npm install react-router-dom -> Which is used to implement client-side dynamic navigation in React Web applications without triggering a full page reload.
- To have MaterialUI, do: npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
5. Created the following folders:

    src/
        components/ -> To hold the components that will be recyclable throught the website
        pages/      -> To have the pages full displayed in the website
        styles/     -> Styles of the thing, basically to have the colour pallette done here
        
5. Created theme colours in src/styles/theme.css
6. Import theme.css in index.css
7. Modify Router + Layout in main.jsx and App.jsx
8. Created src/components/Layout.jsx