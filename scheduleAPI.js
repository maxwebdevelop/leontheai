// // Replace ./data.json with your JSON feed
//   fetch('https://v1.nocodeapi.com/maximfedorets/calendar/YvJnXxnRYyFWGTla/listEvents')
//     .then((response) => {
//       return response.json()
//     })
//     .then((data) => {
//       //loop throught the items display the description the summary and the date in the console
//       //append the data to schedule div
//       console.log(data);
//       for (let i = 0; i < data.items.length; i++) {
//         console.log(data.items[i].summary + " " + data.items[i].description + " " + data.items[i].start.dateTime)
//         var schedule = document.getElementById("schedule");
//         var scheduleItem = document.createElement("div");
//         scheduleItem.className = "schedule-item";
//         schedule.appendChild(scheduleItem);
//         var scheduleItemTitle = document.createElement("h5");
//         scheduleItemTitle.innerHTML = data.items[i].summary;
//         scheduleItem.appendChild(scheduleItemTitle);
//         var scheduleItemDescription = document.createElement("p");
//         scheduleItemDescription.innerHTML = data.items[i].description;
//         scheduleItem.appendChild(scheduleItemDescription);
//         var scheduleItemDate = document.createElement("p");
//         scheduleItemDate.innerHTML = data.items[i].start.dateTime;
//         scheduleItem.appendChild(scheduleItemDate);
//         scheduleItemDate.style.marginBottom = "10%";

//         if(data.items[i].description === ""){
//           scheduleItemDescription.innerHTML = "No description available";
//         }
//       }
//     })
//     .catch((error) => {
//       console.log(error)
//     }
//   )

  // Refresh the fetch data every 1 second
    fetch('https://v1.nocodeapi.com/maximfedorets/calendar/YvJnXxnRYyFWGTla/listEvents')
      .then((response) => {
        return response.json()
      }
      )
      .then((data) => {
        //loop throught the items display the description the summary and the date in the console
        //append the data to schedule div
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          console.log(data.items[i].summary + " " + data.items[i].description + " " + data.items[i].start.dateTime)
          var schedule = document.getElementById("schedule");
          var scheduleItem = document.createElement("div");
          scheduleItem.className = "schedule-item";
          schedule.appendChild(scheduleItem);
          var scheduleItemTitle = document.createElement("h5");
          scheduleItemTitle.innerHTML = data.items[i].summary;
          scheduleItem.appendChild(scheduleItemTitle);
          var scheduleItemDescription = document.createElement("p");
          scheduleItemDescription.innerHTML = data.items[i].description;
          scheduleItem.appendChild(scheduleItemDescription);
          var scheduleItemDate = document.createElement("p");
          scheduleItemDate.innerHTML = data.items[i].start.dateTime;
          scheduleItem.appendChild(scheduleItemDate);
          scheduleItemDate.style.marginBottom = "10%";

          if(data.items[i].description === ""){
            scheduleItemDescription.innerHTML = "No description available";
          }
        }
      }
      )
      .catch((error) => {
        console.log(error)
      }
    )







