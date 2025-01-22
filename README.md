# Choosing [EXIFR](https://github.com/MikeKovarik/exifr)

Once I had image thumbnails appearing on screen, I went ahead and did research on what Javascript library would be the most appropriate for parsing typical image file formats, such as JPEG and PNG. 

I initially found a library called [exif-js](https://github.com/exif-js/exif-js), but I passed on it for a few reasons.

1. This library was very old. It did have a commit 8 months ago to fix a typo, but that is the newest commit since their last commit in 2018.
2. No live demonstration on how it worked. 
3. Seemingly little documentation? 

I wanted a bit more from a library covering things I did not fully understand yet. After checking a StackOverflow post, I stumbled upon [EXIFR](https://github.com/MikeKovarik/exifr).

It has a lot of different features, demonstrations to choose from on their website, seemingly easy to use, but on a funnier note...

![EXIFR Website Homepage](readme_images/Screenshot_20241209_233740.png)
*oh this layout seems familiar lol*

This isn't a big deal or anything, but I wouldn't lie if I said I worried a little. I didn't want to be interpreted as a copy-cat or giving people the impression I was copying this website. I tried telling myself that I didn't know about this website until I did researching just recently, so it really shouldn't be an issue.

# Addressing the SubmitImage function

I had to address the fact that the imageFile state seemingly did not update after setting it? No matter where I put console.logs, it was null. 

After checking more console.logs, I found a similar pattern as I noticed in the AcceptImage function. After uploading an image, I noticed that some console.logs that were otherwise null, would display the proper information from the *previous* image.

I still couldn't properly figure out how to address this though. Maybe it needed another render? I believe thats what helped the AcceptImage function as well. I discussed it with a friend who has vague knowledge of React and they recommended I try a hook to achieve this. useEffect was what helped me here, as watching specifically for the imageFile state to change allowed the console.logs to display the proper information. 

Thusly, I was able to successfully send the information that was needed to the ParseImage file, which is where all the logic for parsing metadata will go!

# Drag and Drop

For this part, I used the [react-dropzone package](https://react-dropzone.js.org/). Luckily, this wasn't very complicated. I created a function for the dropzone, and moved my existing code for the div and everything inside it, into the return part of the function. I could then execute the dropzone function where the old div was thanks to react.

# Removing EXIF Data

Removing EXIF Data would be very useful given that is often where sensitive information is held. I found a package called [exif-be-gone] (https://github.com/joshbuddy/exif-be-gone#readme). However, this turned out to be a package that was expected to be ran server-side, and I unfortunately don't know enough about the backend in order to run something like that. I had to make a [forum post](https://forum.freecodecamp.org/t/having-trouble-with-require/730409) for help regarding the issue, and is how I found out the issue. I do plan on learning the backend, but learning it for this project seems like not the best investment, at least when concerning time. I narrowed my search to two potential packages.

I had to choose between a package called [exif-js](https://github.com/exif-js/exif-js) and [Compressor.js](https://www.npmjs.com/package/compressorjs)... wait a minute. 

Exif.js is the package I initially passed on before, but it as well as Compressor.js can remove EXIF data from client-side. These were the best options I had. 

Initially, I went with the first option, not realizing this was in fact the same package I passed on before! It caused a lot of issues, with mostly the .js file it was referencing to exectute the logic constantly failing with common issues, like not including the let keyword when setting up a for loop. I kept trying to fix these errors, but it didn't seem to really get me much of anywhere.