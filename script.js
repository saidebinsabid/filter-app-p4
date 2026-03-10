// ==========================================
// AI FACE FILTER APPLICATION LOGIC
// Written in a simple, beginner-friendly way
// ==========================================

// --- VARIABLES ---
let video;       // Will hold our webcam video stream
let poseNet;     // Will hold the AI model that detects facial features
let eyeX = 0;    // X position to place the filter
let eyeY = 0;    // Y position to place the filter
let filterImage; // The actual sunglasses image we will draw

// --- FILTER SETTINGS (CHANGE THESE TO RESIZE/MOVE THE FILTER) ---
let filterWidth = 250;  // Change this number to make the image wider or narrower
let filterHeight = 180; // Change this number to make the image taller or shorter

// Adjust these to shift the filter left/right or up/down based on the nose
let offsetX = -120; // Negative moves it left, positive moves it right
let offsetY = -100; // Negative moves it up, positive moves it down

// --- LOAD ASSETS (Images, Sounds, etc) ---
// Note: preload() runs ONCE before everything else starts.
function preload() {

	// 1. ACTIVE FUNNY SUNGLASSES FILTER
	// We load this image from the internet using your original direct link.
	// filterImage = loadImage('https://i.postimg.cc/Jn8cq1CN/Image20250128191922.png');

	// =========================================================================
	// --> HOW TO ADD NEW FILTERS (https://www.stickpng.com/) <--
	// 1. You cannot use just any random link from Google (it causes "Loading..." errors).
	// 2. Upload your own funny filter image to an image host like postimg.cc (which you used originally).
	// 3. Copy the "Direct link" they provide.
	// 4. Paste it below like this:
	// filterImage = loadImage('https://i.ibb.co.com/4wVcS62L/584999b17b7d4d76317f6000.png');
	// filterImage = loadImage('https://i.ibb.co.com/s9X85GH1/580b57fbd9996e24bc43bf44.png');
	// filterImage = loadImage('https://i.ibb.co.com/LXRSHQ88/580b57fbd9996e24bc43bf3f.png');
	filterImage = loadImage('https://i.ibb.co.com/TqgFyCF7/580b57fbd9996e24bc43bf3e.png');
	// =========================================================================
}

// --- INITIAL SETUP ---
// Note: setup() runs ONCE when the app starts.
function setup() {
	// 1. Create a drawing area (canvas) that is 600px wide and 400px high
	let canvas = createCanvas(600, 400);

	// 2. Attach the canvas to our specific HTML container
	canvas.parent('canvas-container');

	// 3. Start the webcam video capture
	video = createCapture(VIDEO);
	video.size(600, 400); // Make the video the exact same size as the canvas
	video.hide();         // Hide the default HTML video player (we print it on canvas manually)

	// 4. Load the ml5.js PoseNet AI Model to detect human poses
	// We pass 'video' so it looks at the webcam, and 'modelLoaded' so we know when it's ready.
	poseNet = ml5.poseNet(video, modelLoaded);

	// 5. Start listening for poses. When a pose is found, run the 'gotPoses' function.
	poseNet.on('pose', gotPoses);
}

// --- WHEN AI MODEL IS READY ---
function modelLoaded() {
	console.log("Success: PoseNet AI model is loaded and ready to detect faces!");
	// Hide the "Loading..." text from HTML once ready
	let loadingIndicator = document.getElementById('loading-indicator');
	if (loadingIndicator) {
		loadingIndicator.style.display = 'none';
	}
}

// --- WHEN AI DETECTS POSES ---
// 'poses' is an array holding all the people the AI spots.
function gotPoses(poses) {
	// If the AI sees at least one person
	if (poses.length > 0) {

		// Grab the data of the very first person it sees
		let singlePose = poses[0].pose;

		// Find exactly where the nose is (X and Y coordinates)
		let noseX = singlePose.nose.x;
		let noseY = singlePose.nose.y;

		// Math adjustment: We want the sunglasses to cover the eyes, 
		// not just sit exactly on the nose tip.
		eyeX = noseX + offsetX; // Apply left/right adjustment
		eyeY = noseY + offsetY; // Apply up/down adjustment
	}
}

// --- DRAWING LOOP ---
// Note: draw() runs automatically 60 times every second.
function draw() {
	// 1. Draw the live video on the screen (x: 0, y: 0)
	image(video, 0, 0, 600, 400);

	// 2. Draw the funny image! 
	// We draw it at the calculated 'eyeX' and 'eyeY' coordinates.
	// The width and height are controlled by the variables at the top of the file.
	if (filterImage) {
		image(filterImage, eyeX, eyeY, filterWidth, filterHeight);
	}
}

// --- BUTTON ACTION ---
// This function is triggered when you click the "Take Snapshot" HTML button.
function takeSnapshot() {
	// Save the current canvas as an image file on your computer
	save('my-funny-selfie.png');
}