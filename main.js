(()=>{"use strict";const t=document.getElementById("listFolder"),e=document.getElementById("textInputFolder");class n{constructor(t,e,n){this.tastTitle=t,this.taskDate=e,this.taskPriority=n}}const d=document.getElementById("btnFolder"),i=document.getElementById("btnTask");d.addEventListener("click",(function(){const n=e.value,d=document.createElement("li"),i=`<h5 class="showTasks">${n}</h5> <button id="openBtn">Open</button> <button class="dFolder">Delete</button>`;localStorage.setItem("value",i),console.log(i),d.innerHTML=localStorage.getItem("value"),t.appendChild(d),d.querySelector(".dFolder").addEventListener("click",(function(){t.removeChild(d)})),d.querySelector("#openBtn").addEventListener("click",(function(){document.getElementById("mainRight").innerHTML='<ul id="listOfTasks"></ul>'}))})),i.addEventListener("click",(function(){const t=document.getElementById("taskInput").value,e=document.getElementById("dateInput").value,d=document.getElementById("priority").value,i=document.getElementById("listOfTasks"),l=new n(t,e,d),o=document.createElement("li");o.innerHTML=`<div class="tasks">\n   <div class="taskLeft">\n   <input type="checkbox" name="" id="checkbox">  \n   <div >${l.tastTitle} </div>\n   <div><div>${l.taskDate}</div> \n   </div>\n   </div>\n   <div class="taskRight"> \n   <div id="taskPrior">${l.taskPriority}\n   </div> \n   <button class="delBtn">Del</button>\n   </div> \n   </div>`,o.querySelector(".delBtn").addEventListener("click",(function(){i.removeChild(o)})),i.appendChild(o)}))})();