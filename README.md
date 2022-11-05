
<h1>twinklecubeUI is a React ui component library</h1>


<h2>install:</h2>

`npx @twinklecube/create-ui-library ui-library`
<p>required node version 16.7.0 or higher</p>
<p>
Here the 'ui-library' is the package/directory name... so, it's your choice<br> 
This command will create a folder called 'ui-library' and install the project there
</p>

`npx @twinklecube/create-ui-library .`
<p>
This command will install the package in the current directory
</p>

<ul>
    <li>React 18</li>
    <li>typescript</li>
    <li>css, css modules</li>
    <li>scss/sass, modules</li>
    <li>less, less modules</li>
    <li>styled-components</li>
</ul>

<h2>Run in development server:</h2>

`npm run dev`
<br>
This command will start the development server on port 3030

<h2>Build:</h2>

`npm run build`
<br>
This command will create the 'dist' folder and put the bundled files there

<h2>
    Documentation
</h2>

<p>
    css and modules, sass/scss and modules, less and 
    modules as well as styled-components are enabled in default
</p>
<p>@emotion is not supported yet</p>

<h3>How to create a new component</h3>
<ul>
    <li>
        Create a new folder inside src > components 
        with your component name. (eg. 'button')
    </li>
    <li>
        Inside the newly created folder, create your 
        corrensponding react file. 
        <br />(eg. Button.tsx)
        <br />your component code goes there.
    </li>
</ul>

<h3>How to include your component in the twincklecube dashbord</h3>
<ul>
    <li>
        Inside the component folder created previously, create the corresponding 
        .twinklecube.tsx file (eg. Button.twinklecube.tsx)
    </li>
    <li>
        Inside this file import the component file
        <br />
        `import Button from './Button'`
        <br />
    </li>
    <li>
        Try our component with whatever the props, types, etc... you have defined.
        <br /> you can see an example component 'Chip'.
    </li>
    <li>
        Inside the 'twinklecube' folder, in the SideNav component, create a new 
        route for the newly created component
        <br /> you may follow the patters
    </li>
    <li>
        Inside the 'twinklecube' folder, in the 'Container' component
        import the new '.twinklecube.tsx' component.
        <br />eg. 'import ButtonTwinklecube from "../../../src/components/button/Button.twinklecube"';
        <br /> and expose the component to the route created previously
        <br /> you may follow the pattern
    </li>
    <li>
        Now you are good to go!!!
        <br /> Your component is on the twinklecube dashboard 
    </li>
</ul>

<h3>styled-components</h3>
<p>version 4.4.1</p>
<p>
    styled-components are installed and ready to use
    <br /> just import as usual and that's it
    <br /> `import styled from "styled-components"`
</p>

<h3>
    More documentation and features will follow
</h3>

<h3>
    Please note, that twinklecube is very new... there may be many hiccups.
</h3>
<p>
    please be good enough to inform us about any bugs, etc... twinklecubeui@gmail.com
</p>



