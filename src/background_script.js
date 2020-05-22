window.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById('startButton')
	startButton.addEventListener("click",()=>{      
		chrome.tabs.executeScript({
			file:'/src/like.js'
		})
	})


const stopButton = document.getElementById('stopButton')
	stopButton.addEventListener("click",()=>{      
		chrome.tabs.executeScript({
			file:'/src/stop.js'
		})
	})

const followButton = document.getElementById('followButton')
	followButton.addEventListener("click",()=>{      
		chrome.tabs.executeScript({
			file:'/src/follow.js'
		})
	})


	const unFollowButon = document.getElementById('unfollowButton')
	unFollowButon.addEventListener("click",()=>{      
		chrome.tabs.executeScript({
			file:'/src/unFollow.js'
		})
	})
})