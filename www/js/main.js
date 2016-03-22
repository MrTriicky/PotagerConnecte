$(' #intro img ')

.velocity({
	opacity: 1
},{
	duration: 1000,
	delay: 1000
})

.velocity({
	translateY: 0
},{
	duration: 1000
})

.velocity({
	rotateZ: 15
},{
	duration: 100
})

.velocity({
	rotateZ: -15
},{
	duration: 100
})

.velocity({
	rotateZ: 15
},{
	duration: 100
})

.velocity({
	rotateZ: 0
},{
	duration: 100
})

.velocity({
	translateY: -500
},{
	duration: 800,
	delay: 1000
});

$(' #intro ').velocity({
	translateY: 0
},{
	duration: 1000,
	delay: 3000
}).velocity({
	translateY: -1000
},{
	duration: 800
})