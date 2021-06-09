//http://localhost:3000

//Prelimanary steps:
//Read the Readme
//Look at the json and htm files
// start the server
//about to pseudo code
// PSEUDO CODE:



document.addEventListener("DOMContentLoaded", () => {

    const dolphinName = document.querySelector("h2.name")
    const dolphinImage = document.querySelector("img.dolphin")
    const dolphinLikes = document.querySelector("span.likes")
    const dolphinComments = document.querySelector("ul.comments")

    const dUrl = "http://localhost:3000/dolphins/1"
//1st Deliverable:

// - See the dolphin image received from the server, including its title, likes and comments when the page loads

//load the content from the sever(fetch http://localhost:3000/dolphins/1 )
//add the contenet to the page
//name of dol (h2)
//image (img tag with class of dolphin), the number of likes (span tag with class of likes
//and comments(tah with ul comments)
//

    fetch(dUrl)
    .then(response => response.json())
    .then(data => {
      dolphinName.innerHTML = data.name
      dolphinImage.src = data.image
      dolphinLikes.innerHTML = `${data.likes} likes`
      dolphinComments.innerHTML = ""
      data.comments.forEach(object => {
        const listItem = document.createElement("li")
        listItem.innerHTML = object.content
        dolphinComments.append(listItem)

       })
     })
     //second deliverable here:

     const likeButton = document.querySelector("button.like-button")
     //const dolphinLikes = document.querySelector("span.likes")// this was defined for 1st and we are using it again
     likeButton.addEventListener("click", () => {
       let numberOfLikes = parseInt(dolphinLikes.innerHTML)
       numberOfLikes = numberOfLikes +1

       const formData = {
       likes: numberOfLikes
       } 
       const confObject = {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           },
           body: JSON.stringify(formData)
       }

       fetch(dUrl, confObject)
       .then(resp => resp.json())
       .then(data => {
           dolphinLikes.innerHTML = `${data.likes} likes`// brought from 1st deliverable
        
       })
     })

     //3rd deliverable here:
     const form = document.querySelector("form.comment-form")
     form.addEventListener("submit", (event) => {
         event.preventDefault() 
         const li = document.createElement("li")
         li.innerHTML = form.querySelector(".comment-input").value
         dolphinComments.append(li)
         console.log(form)

     })

    //  const commentButton = document.querySelector("button.comment-button")
    //  commentButton.addEventListener("click", (event) => {
    //      event.preventDefault()

    //      const commentInput = document.querySelector("input.comment-input")
    //      const newComment = commentInput.value
    //      const newCommentListItem = document.createElement("li")
    //      newCommentListItem.innerHTML = newComment
    //      const dolphinComments = document.querySelector("ul.comments")// brought from 1st deliverable
    //      dolphinComments.append(newCommentListItem)
    //      commentInput.value = ""

    //  })
  


})




//2nd Deliberable
// - Click on the heart icon to increase the dolphin image's likes, and still see them when I reload the page
//set event Listener to a click on the like button
//after the click occurs:
//find how mnany likes are currently displayed on the page(span tag with a number of likes)
//caluclate number of likes (current likes plus1)
//fetch(patch) to tell server what the new number of likes is going to be
//return the number of likes to opage and display for the user




//3rd Deliverable
// - Add a comment (no persistance needed)
//add event listener
//after the submit occurs
//grab the text out of the comment box
//display the new commen to the DOM in  the comment section