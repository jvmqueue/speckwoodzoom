<h1>Professional Photographers App</h1> 
<p>Angular Application</p>
<p><a href="http://jvmqueue.com/speckwoodZoom/">URL for Initial Dev Work</a></p>
<h2>Current State</h2>
<font color="red">In Development</font>
<p>Using, but not limited to:</p>
<ul>
    <li>Primitive JavaScript</li>
    <li>Object oriented JavaScript</li>
    <li>jQuery</li>
    <li>Angular JS</li>    
    <li>Custom Directives, HTML Tags</li>    
    <li>CSS3</li>   
    <li>Grunt</li>
</ul>
<h3>Stategies and Techniques</h3>
<ul>
    <li>JSON for stubbing out data</li>
    <li>Angular.js for employing Model View View Model Architecture</li>
    <li>Grunt for CSS lint, JS Lint, and jsDoc</li>
    <li>Bower Grunt plug-in for quick resource download during app development</li>
    <li>Yeoman for initializing scaffolding</li>
</ul>
<h3>Development Work-flow</h3>
<h4>Fundemental Architecture</h4>
<div>
    <pre>
        <code>
            ├── site/app
            │   ├── html resources
            │   ├── bower_components
            │   │     └── angular
            │   │     └── angular-route
            │   │     └── angular-touch            
            │   │     └── bootstrap     
            │   │     └── jquery  
            │   ├── directives
            │   ├── images
            │   ├── scripts
            │   │     └── controllers
            │   │     └── directives
            │   │     └── app.js
            │   ├── styles
            │   │     └── imageGallery.css
            │   │     └── main.css
            │   ├── views
            │   │     └── about.html
            │   │     └── imagegallery.html            
            │   │     └── main.html            
            ├── site/dist            
            ├── site            
            │   ├── Gruntfile.js            
            │   ├── package.json            
            │   ├── .gitignore            
        </code>
    </pre>
</div>


 

 
