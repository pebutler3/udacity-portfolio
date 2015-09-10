 var data = new Date();
 var todaysDate = ("<h3>[ " + data.getMonth() + '/' +  data.getDate() + "/" + data.getFullYear() + " ]</h3>");
 var timeStamp = document.querySelector('.time-stamp');
 timeStamp.innerHTML = todaysDate;
