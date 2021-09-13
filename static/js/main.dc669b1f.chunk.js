(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),a=i(7),r=i.n(a),n=(i(15),i(0));var o=function(){return Object(n.jsx)("header",{id:"header-background",children:Object(n.jsx)("h1",{children:"Joshua Sieler"})})};var l=function(){return Object(n.jsxs)("footer",{children:[Object(n.jsx)("a",{href:"https://github.com/Jsieler",children:Object(n.jsx)("img",{src:"icons8-github-96.png",alt:"github-logo",className:"icon"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/joshua-sieler-562445209/",children:Object(n.jsx)("img",{src:"icons8-linkedin-circled-96.png",alt:"linkedin-logo",className:"icon"})}),Object(n.jsx)("a",{href:"https://stackoverflow.com/users/15420216/josh-sieler",children:Object(n.jsx)("img",{src:"icons8-stack-overflow-96.png",alt:"stack-overflow",className:"icon"})})]})},h=i(9);var d=function(e){return Object(n.jsx)("ul",{className:"nav nav-tabs",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})},j=i(18),p=i(19),b=i(20),u=function(){return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(p.a,{children:Object(n.jsx)("h2",{children:"Resume"})}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("h3",{children:"Front End Proficiencies:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"HTML"}),Object(n.jsx)("li",{children:"CSS"}),Object(n.jsx)("li",{children:"JavaScript"}),Object(n.jsx)("li",{children:"JQuery"}),Object(n.jsx)("li",{children:"Bootstrap"}),Object(n.jsx)("li",{children:"The Dom"}),Object(n.jsx)("li",{children:"APIs"}),Object(n.jsx)("li",{children:"JSON"}),Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"PWAs"})]})]})}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("h3",{children:"Back End Proficiencies:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Node"}),Object(n.jsx)("li",{children:"OOP"}),Object(n.jsx)("li",{children:"Express"}),Object(n.jsx)("li",{children:"MySQL"}),Object(n.jsx)("li",{children:"MVC Paradigm"}),Object(n.jsx)("li",{children:"Sequelize"}),Object(n.jsx)("li",{children:"Testing"}),Object(n.jsx)("li",{children:"NoSQL"}),Object(n.jsx)("li",{children:"MERN Stack"})]})]})})]})},m=i.p+"static/media/bio-image.a0a33497.jpeg",x=function(){return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(p.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("img",{src:m,className:"bio-image mx-auto d-block",width:"200px",alt:"bio"}),Object(n.jsx)("h2",{children:"About Me"})]})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("p",{className:"about-me-text",children:"\"My name is Joshua Sieler, and this is my portfolio I have made with React. I'm currently enrolled in the University of Utah Professional Education Coding Boot Camp, where I have discovered my new passion for coding! I'm in the process of becoming a Full-Stack Web Developer, in my portfolio you can find how to contact me, and also view my projects I have made using a variety of coding languages.\""})})})]})},g=i(8);function O(e){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"img-container",children:Object(n.jsx)("img",{alt:e.name,src:e.image,width:"100%",height:"300px"})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("p",{className:"project-title",children:e.name})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{className:"project-description",children:e.description})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"project-icons",children:[Object(n.jsx)("a",{href:e.github,children:Object(n.jsx)("img",{src:"icons8-github-60.png",alt:"github-icon"})}),Object(n.jsx)("a",{href:e.deployedapp,children:Object(n.jsx)("img",{src:"icons8-website-60.png",alt:"deployed-icon"})})]})}),Object(n.jsx)("li",{children:e.skills})]})})]})}function f(e){return Object(n.jsx)("div",{className:"wrapper",children:e.children})}var v=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"project",children:Object(n.jsx)("h2",{className:"title",children:"Projects"})}),Object(n.jsx)(f,{children:g.map((function(e){return Object(n.jsx)(O,{name:e.name,image:e.image,github:e.github,deployedapp:e.deployedapp,skills:e.skills,description:e.description},e.id)}))})]})},y=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(v,{})})};var w=function(){return Object(n.jsxs)("section",{className:"contact-container",children:[Object(n.jsx)("h3",{children:"Contact"}),Object(n.jsx)("a",{href:"tel:801-9166917",children:Object(n.jsx)("img",{src:"icons8-phone-96.png",alt:"phone",className:"icon"})}),Object(n.jsx)("a",{href:"mailto:Sielerjosh@gmail.com",children:Object(n.jsx)("img",{src:"icons8-email-96.png",alt:"email",className:"icon"})})]})};var k=function(){var e=Object(c.useState)("About"),t=Object(h.a)(e,2),i=t[0],s=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{currentPage:i,handlePageChange:s}),Object(n.jsx)("div",{children:function(){switch(i){case"About":return Object(n.jsx)(x,{});case"Portfolio":return Object(n.jsx)(y,{});case"Contact":return Object(n.jsx)(w,{});case"Resume":return Object(n.jsx)(u,{});default:return Object(n.jsx)(x,{})}}()})]})},S=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o,{}),Object(n.jsx)(k,{}),Object(n.jsx)(l,{})]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),N()},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"Cinamac","image":"cinamac.jpeg","github":"https://github.com/Jsieler/Cinamac","deployedapp":"https://jsieler.github.io/Cinamac/","description":"Mobile responsive Movie app that uses API\'s to allow the user to get info on movies playing in theater, theaters nearby, daily/weekly trending movies/tv-shows. Users can also search for movies/tv-shows/actors, which will provide a description, and a few facts about searched item.","skills":"HTML, CSS/Bootstrap, JavaScript/JQuery, API"},{"id":2,"name":"Hogwart Library","image":"hogwarts-library.jpeg","github":"https://github.com/Jsieler/wizard-sorting-quiz","deployedapp":"https://pacific-scrubland-02824.herokuapp.com/","description":"Welcome to Hogwarts library where you can view Witches and Wizards, view Spells and even create your own Spells and Wizards! If you want to become a Witch or Wizard you can take a quiz to figure out what house best fits you, or let destiny decide your fate.","skills":"HTML, JavaScript, CSS, Express, MVC, API, MySQL, Express, Bcrypt, Micron.js, Express-session, Express-handlebars "},{"id":3,"name":"Weather Report","image":"weather-report.jpeg","github":"https://github.com/Jsieler/weather-report","deployedapp":"https://jsieler.github.io/weather-report/","description":"Weather Report is an application that uses third party APIs from https://openweathermap.org/ to access their data on weather forecasts for desired city. Search a City name and get the current weather, and a 5 day forecast.","skills":"HTML, JavaScript, CSS, API, DOM"},{"id":4,"name":"Track My Budget","image":"track-my-budget.jpeg","github":"https://github.com/Jsieler/track-my-budget","deployedapp":"https://afternoon-lowlands-53183.herokuapp.com/","description":"Track My Budget is an application that allows users to add and subtract expenses to their budgets. This application allows for offline access and functionality, without a connection. If the user enters transactions offline, the total will be updated when they\'re brought back online. This application uses service worker, web manifest, and IndexedDB for offline functionality.","skills":"HTML, JavaScript, CSS, Service Worker, Web Manifest, IndexedDB, MongoDB, Express"},{"id":5,"name":"Note Taker","image":"note-taker.jpeg","github":"https://github.com/Jsieler/note-taker","deployedapp":"https://floating-mountain-03397.herokuapp.com/","description":"Application that can be useed to write and save notes. This application uses Express.js back end to save and retrieve note data from a JSON file.","skills":"HTML, JavaScript, CSS, API, Express"},{"id":6,"name":"Work Day Scheduler","image":"workday-scheduler.jpeg","github":"https://github.com/Jsieler/work-day-schedule","deployedapp":"https://jsieler.github.io/work-day-schedule/","description":"Work Day Scheduler is a simple calendar application that allows a user to save events for each hour of the day.","skills":"HTML, JavaScript, CSS, jQuery, Moment.js"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.dc669b1f.chunk.js.map