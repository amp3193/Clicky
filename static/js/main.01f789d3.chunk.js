(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=a(9),o=a(1),l=a(2),u=a(4),m=a(3),g=a(5);a(16);var d=function(){return n.createElement("header",{className:"header"},n.createElement("h1",null,"Pet all the Cats!"),n.createElement("h3",null,"Click each cat to pet them, but pet each only once because a cat made the rules."))};var h=function(){return n.createElement("footer",{className:"footer"},n.createElement("div",null,"Pet all the Cats!"))};var p=function(e){return n.createElement("div",{className:"navbar"},n.createElement("div",null,"Pet all the Cats!"),n.createElement("div",null,e.userText),n.createElement("div",null,"Pets: ",e.score," | Most Cats Petted: ",e.bestScore))},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},a.onMouseEnter=function(e){a.setState({hover:!0})},a.onMouseLeave=function(e){a.setState({hover:!1})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={};return this.state.hover&&(t.transform="scale(1.15)",t.boxShadow="0 0 4px 4px yellow"),n.createElement("div",{className:"card",style:t},n.createElement("img",{src:this.props.img.image,alt:"",onClick:function(t){return e.props.click(t,e.props.img)},onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave}))}}]),t}(n.Component),k=a(8),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={imgData:k,currentScore:0,bestScore:0,clicked:[],userText:"Pet a cat to begin"},a.handleImageClick=function(e,t){if(e.preventDefault(),a.state.clicked.indexOf(t.id)>=0)console.log("clicked same one twice, game over"),a.setState({clicked:[],currentScore:0,userText:"HISS! Game Over"});else{console.log("clicked a new image, keep going");var n=a.state.currentScore+1;n===a.state.imgData.length?a.setState({clicked:a.state.clicked.concat(t.id),currentScore:n,bestScore:Math.max(a.state.bestScore,n),userText:"You Won! You're the cat's meow!"}):a.setState({clicked:a.state.clicked.concat(t.id),currentScore:n,bestScore:Math.max(a.state.bestScore,n),userText:"Purr!"})}},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object(s.a)(this.state.imgData);return this.shuffle(t),r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,{userText:this.state.userText,score:this.state.currentScore,bestScore:this.state.bestScore}),r.a.createElement("div",{className:"card-list"},t.map(function(t){return r.a.createElement(v,{img:t,key:t.id,click:e.handleImageClick})})),r.a.createElement(h,null))}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}}]),t}(n.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e){e.exports=[{id:1,image:"./images/kitten1.jpg"},{id:2,image:"./images/kitten2.jpg"},{id:3,image:"./images/kitten3.jpg"},{id:4,image:"./images/kitten4.jpg"},{id:5,image:"./images/kitten5.jpg"},{id:6,image:"./images/kitten6.jpg"},{id:7,image:"./images/kitten7.jpg"},{id:8,image:"./images/kitten8.jpg"},{id:9,image:"./images/kitten9.jpg"},{id:10,image:"./images/kitten10.jpg"},{id:11,image:"./images/kitten11.jpg"},{id:12,image:"./images/kitten12.jpg"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.01f789d3.chunk.js.map