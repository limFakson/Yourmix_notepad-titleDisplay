// fetch('https://todo-react.up.railway.app/api/tasks/', {
//   method: 'GET', // Use the appropriate HTTP method
//   headers: {
//     'Authorization': 'Bearer your-api-token', // Add authentication headers if required
//   },
// })
// .then(response => response.json())
// .then(data => {
//   // Handle the API response data
//   console.log(data);
  
//   const tableBody = document.getElementById('tbody');
  
//   data.forEach(object => {
//     //creat a new table row
//     const row = tableBody.insertRow();

//     //create and populate table cellsfro each property
//     // const cell1 = row.insertCell(0);
//     // cell1.innerHTML = object.id;

//     const cell2 = row.insertCell(0);
//     cell2.innerHTML = object.title;

//     // const cell3 = row.insertCell(2);
//     // cell3.innerHTML = object.completed;
//   })
// })
// .catch(error => {
//   // Handle errors
//   console.error(error);
// });

// async function getdataResponse() {
//     try{
//         const data = await fetchData();

        
// } catch (error) {
//         console.log(error)
//     }
// }

async function fetchData() {
    try{
        const response = await fetch('https://todo-react.up.railway.app/api/tasks/');
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const data = await response.json();

        console.log(data);

        const tableBody = document.getElementById('tbody');

        data.forEach(object => {
            //creat a new table row
           const row = tableBody.insertRow();
           
          const cell2 = row.insertCell(0);
          cell2.innerHTML = object.title;
    })
        return data;
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error;
    }
};

fetchData()

function sendResponse() {
    const noteTitle = document.getElementById('noteTitle').value;

    console.log(noteTitle);

    const dataToSend = {
    title: noteTitle
  };

  console.log(dataToSend)

  //async function
  async function sendData() {
    try{
        const response = await fetch('https://todo-react.up.railway.app/api/tasks/',{
            method: 'POST',
            headers: {
                'content-type': response/json
            }
        })
    } catch (error) {

    }
}
};
